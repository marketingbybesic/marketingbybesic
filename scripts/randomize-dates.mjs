import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const BLOG_DIR = './src/content/blog';

// Date ranges (assuming today is April 2026)
// Proof: April 1, 2025 - September 30, 2025 (older history)
// Blog: October 1, 2025 - April 15, 2026 (more recent)

function randomDateInRange(startStr, endStr) {
  const start = new Date(startStr);
  const end = new Date(endStr);
  const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
  const date = new Date(randomTime);
  // Format as YYYY-MM-DD
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

async function main() {
  const files = await readdir(BLOG_DIR);
  const mdFiles = files.filter(f => f.endsWith('.md'));

  console.log(`Found ${mdFiles.length} markdown files in ${BLOG_DIR}`);

  for (const file of mdFiles) {
    const filePath = join(BLOG_DIR, file);
    const content = await readFile(filePath, 'utf-8');

    // Parse frontmatter - extract category
    const categoryMatch = content.match(/category:\s*(blog|proof)/);
    if (!categoryMatch) {
      console.warn(`⚠️  No category found in ${file}, skipping`);
      continue;
    }

    const category = categoryMatch[1];
    
    // Generate random date based on category
    let newDate;
    if (category === 'proof') {
      // April 1, 2025 to September 30, 2025
      newDate = randomDateInRange('2025-04-01', '2025-09-30');
    } else {
      // October 1, 2025 to April 15, 2026
      newDate = randomDateInRange('2025-10-01', '2026-04-15');
    }

    // Replace the publishDate line in frontmatter
    const updatedContent = content.replace(
      /^(publishDate:\s*).+$/m,
      `$1${newDate}`
    );

    await writeFile(filePath, updatedContent, 'utf-8');
    console.log(`✅ ${file} | category: ${category} | new date: ${newDate}`);
  }

  console.log('\n🎉 Date randomization complete!');
}

main().catch(console.error);
