#!/usr/bin/env python3
"""Generate offer page images via Gemini Imagen 3 API."""

import urllib.request
import json
import base64
import subprocess
import sys
import os
import time

OUTPUT_DIR = os.path.expanduser("~/marketingbybesic/public")

# Get API key from macOS keychain
def get_api_key():
    result = subprocess.run(
        ["security", "find-generic-password", "-s", "gemini_api", "-w"],
        capture_output=True, text=True
    )
    key = result.stdout.strip()
    if not key:
        print("ERROR: No gemini_api key found in keychain")
        sys.exit(1)
    return key

# Image specifications: (filename_base, prompt, width, height)
IMAGES = [
    # Medtech
    ("offer-medtech-hero",
     "Dark, moody medical laboratory or research facility with advanced equipment, purple accent lighting, glass and steel surfaces, cinematic photography, ultra-premium aesthetic, no text, no people, dark environment",
     1201, 600),
    ("offer-medtech-problem",
     "Dark conference room with medical presentations on screens, dim purple ambient glow, pharmaceutical industry setting, professional photography, no text, no people",
     801, 400),
    ("offer-medtech-solution",
     "Futuristic medical device displayed in a dark premium showroom with purple neon accent lighting, clean modern architecture, commercial product photography, no text, no people",
     801, 400),
    # B2B Tech
    ("offer-b2b-hero",
     "Dark premium tech office with multiple monitors showing data dashboards, purple ambient lighting, modern glass and concrete interior, cinematic photography, no text, no people",
     1201, 600),
    ("offer-b2b-problem",
     "Dark boardroom with a single laptop on a long table, empty chairs, dim purple accent lighting, corporate photography, no text, no people",
     801, 400),
    ("offer-b2b-solution",
     "Dark modern tech workspace with holographic-style data visualizations, purple neon accents, premium office interior, futuristic commercial photography, no text, no people",
     801, 400),
]

def generate_with_imagen4(api_key, prompt, aspect_ratio="16:9"):
    """Try Imagen 4 API first."""
    url = f"https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key={api_key}"
    payload = json.dumps({
        "instances": [{"prompt": prompt}],
        "parameters": {
            "sampleCount": 1,
            "aspectRatio": aspect_ratio,
            "safetyFilterLevel": "block_few"
        }
    }).encode("utf-8")

    req = urllib.request.Request(url, data=payload, headers={"Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            data = json.loads(resp.read())
            if "predictions" in data and data["predictions"]:
                return base64.b64decode(data["predictions"][0]["bytesBase64Encoded"])
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", errors="replace")
        print(f"  Imagen 4 HTTP {e.code}: {body[:200]}")
    except Exception as e:
        print(f"  Imagen 4 error: {e}")
    return None

def generate_with_gemini_flash(api_key, prompt):
    """Fallback: Gemini 2.5 Flash image generation."""
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key={api_key}"
    payload = json.dumps({
        "contents": [{"parts": [{"text": f"Generate an image: {prompt}"}]}],
        "generationConfig": {"responseModalities": ["TEXT", "IMAGE"]}
    }).encode("utf-8")

    req = urllib.request.Request(url, data=payload, headers={"Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=90) as resp:
            data = json.loads(resp.read())
            # Extract image from response
            if "candidates" in data:
                for candidate in data["candidates"]:
                    if "content" in candidate and "parts" in candidate["content"]:
                        for part in candidate["content"]["parts"]:
                            if "inlineData" in part:
                                return base64.b64decode(part["inlineData"]["data"])
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", errors="replace")
        print(f"  Gemini Flash HTTP {e.code}: {body[:200]}")
    except Exception as e:
        print(f"  Gemini Flash error: {e}")
    return None

def resize_and_convert(png_path, webp_path, width, height):
    """Resize PNG to exact dimensions and convert to webp."""
    # Resize
    subprocess.run([
        "sips", "-z", str(height), str(width), png_path, "--out", png_path
    ], capture_output=True)
    # Convert to webp
    # Try cwebp first for better quality control
    result = subprocess.run(["which", "cwebp"], capture_output=True)
    if result.returncode == 0:
        subprocess.run([
            "cwebp", "-q", "82", png_path, "-o", webp_path
        ], capture_output=True)
    else:
        subprocess.run([
            "sips", "-s", "format", "webp", png_path, "--out", webp_path
        ], capture_output=True)

    # Verify size
    if os.path.exists(webp_path):
        size_kb = os.path.getsize(webp_path) / 1024
        print(f"  Output: {webp_path} ({size_kb:.0f} KB, {width}x{height})")
        return True
    return False

def main():
    api_key = get_api_key()
    print(f"API key loaded ({len(api_key)} chars)")

    success = []
    failed = []

    for filename, prompt, width, height in IMAGES:
        print(f"\nGenerating: {filename}")
        print(f"  Prompt: {prompt[:80]}...")

        # Determine aspect ratio
        aspect = "16:9" if width > 1000 else "16:9"

        # Try Imagen 4 first
        img_data = generate_with_imagen4(api_key, prompt, aspect)
        source = "Imagen 4"

        if not img_data:
            print("  Imagen 4 failed, trying Gemini 2.5 Flash Image...")
            img_data = generate_with_gemini_flash(api_key, prompt)
            source = "Gemini Flash"

        if img_data:
            # Save raw PNG
            png_path = os.path.join(OUTPUT_DIR, f"{filename}.png")
            with open(png_path, "wb") as f:
                f.write(img_data)
            print(f"  Generated via {source} ({len(img_data)} bytes)")

            # Resize and convert
            webp_path = os.path.join(OUTPUT_DIR, f"{filename}.webp")
            if resize_and_convert(png_path, webp_path, width, height):
                success.append(filename)
                # Clean up PNG
                os.remove(png_path)
            else:
                failed.append(filename)
                print(f"  ERROR: Conversion failed")
        else:
            failed.append(filename)
            print(f"  ERROR: Both Imagen 4 and Gemini Flash failed")

        # Rate limit: pace 32s between requests per memory feedback
        if filename != IMAGES[-1][0]:
            print("  Waiting 32s (rate limit)...")
            time.sleep(32)

    print(f"\n=== RESULTS ===")
    print(f"Success: {len(success)}/{len(IMAGES)}")
    for s in success:
        print(f"  OK: {s}.webp")
    if failed:
        print(f"Failed: {len(failed)}")
        for f in failed:
            print(f"  FAIL: {f} -- needs manual replacement")

if __name__ == "__main__":
    main()
