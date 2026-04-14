# **SYSTEM INSTRUCTION: MARKETING BY BEŠIĆ (NRA ECOSYSTEM)**

**Target:** Qwen 3.6 (AI Developer Agent)  
**Context:** Build a hyper-optimized, high-end MedSpa marketing funnel and authority site.  
**Constraint Checklist & Confidence Score:** 1\. Maximize token efficiency (concise directives).  
2\. Ensure bulletproof Node.js deployment.  
3\. Strict TypeScript & component isolation.  
Confidence Score: 5/5.

## **1\. ARCHITECTURE & TECH STACK**

**Core Framework:** Astro (Version 4.x/5.x).  
**Deployment Target:** Node.js. You MUST configure astro.config.mjs with output: 'hybrid' and the @astrojs/node adapter to ensure a stable Node.js server deployment and enable secure API routes.  
**Language:** Strict TypeScript.  
**Styling:** Tailwind CSS. Mobile-first design is strictly required. All layouts must be flawlessly responsive using md: and lg: breakpoints.  
**Animations:** GSAP (GreenSock) & Lenis (Smooth Scroll). Disable heavy scroll animations on mobile devices to preserve performance.  
**CMS:** TinaCMS (Visual Markdown/MDX editor).  
**i18n:** Astro built-in routing (Base: EN. Locales: DE, FR, ES, IT).

## **2\. DESIGN SYSTEM & VIBE ("Exclusive Nightclub")**

* **Colors:** Backgrounds (\#0A0A0A, \#111111), Text (\#FAFAFA, \#A3A3A3), Primary Brand/CTA (\#8224e3).  
* **Typography:** Headings: *Playfair Display* (Serif). Body: *Geist* or *Inter* (Sans-serif).  
* **Premium UI/UX Features (Implement These):**  
  * **GSAP Custom Cursor:** A subtle \#8224e3 glowing dot that expands when hovering over links/CTAs. (Hide cursor on touch devices).  
  * **Lenis Smooth Scroll:** Mandatory for the "expensive" feel on desktop.  
  * **Dynamic Status Indicator:** A small UI element in the footer or header: "Live from Zagreb, Croatia • \[Current Local Time\]" to build trust.  
  * **Magnetic CTAs:** GSAP-powered magnetic pull on the primary /offer buttons.

## **3\. INTEGRATIONS, TRACKING & COMPLIANCE**

### **3.1 GDPR Cookie Consent**

Implement a persistent banner. Meta/GTM scripts must conditionally load based on consent state (save state in localStorage).

### **3.2 Tracking Snippets (Inject into Base Layouts)**

**GTM (Head):**  
\<script\>(function(w,d,s,l,i){w\[l\]=w\[l\]||\[\];w\[l\].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)\[0\],j=d.createElement(s),dl=l\!='dataLayer'?'\&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5GL56SKX');\</script\>  
**GTM (Body):**  
\<noscript\>\<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5GL56SKX" height="0" width="0" style="display:none;visibility:hidden"\>\</iframe\>\</noscript\>  
**Meta Pixel (Head):**  
\<script\>\!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(\!f.\_fbq)f.\_fbq=n;n.push=n;n.loaded=\!0;n.version='2.0';n.queue=\[\];t=b.createElement(e);t.async=\!0;t.src=v;s=b.getElementsByTagName(e)\[0\];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en\_US/fbevents.js');fbq('init', '1978765049417651');fbq('track', 'PageView');\</script\>\<noscript\>\<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1978765049417651\&ev=PageView\&noscript=1"/\>\</noscript\>

### **3.3 Backend API & Content Management**

* **/api/subscribe.ts:** Build a styled Astro component that POSTs to this internal API route. This route securely forwards the payload (Email, First Name, GDPR=1) to the SendFox API (https://sendfox.com/form/108noq/1xxex5).  
* **TinaCMS Architecture:** The user will manually post content via the /admin visual interface. Ensure the TinaCMS schema is robust for both /blog and /proof (Case Studies). It MUST support Rich Text (MDX), featured images, and an easy way to embed IFrames (for YouTube and LinkedIn posts).

### **3.4 Social Media Links (Global Footer / Menus)**

Integrate these precisely where social icons are required:

* Instagram: https://www.instagram.com/marketingbybesic  
* TikTok: www.tiktok.com/@marketingbybesic  
* YouTube: https://www.youtube.com/@marketingbybesic  
* LinkedIn: https://www.linkedin.com/company/marketing-by-besic/  
* X/Twitter: https://x.com/besicmarketing

## **4\. ROUTING ARCHITECTURE**

**Layout A: Authority Hub (Header Nav, Footer, Language Switcher)**  
/ (Home), /about, /architecture, /proof (TinaCMS Case Studies), /blog (TinaCMS MDX), /contact, /newsletter-thank-you, /privacy-policy, /impressum, /terms-of-service.  
**Layout B: DR Funnel (NO Header, NO Footer, Strict conversion path)**  
/offer (Main Landing Page WITH inline Google Calendar Booking ID: dino@marketingbybesic.com), /offer/homework.

## **5\. FULL COPYWRITING & PAGE STRUCTURES**

### **5.1 THE FUNNEL LANDING PAGE (/offer \- Layout B)**

*Structure: Long-form, highly persuasive, stacked value (Ref: selllikecrazy.co). 100% Mobile Optimized.*

* **Hero:** Pre: EXCLUSIVELY FOR LUXURY MEDSPAS IN EUROPE. Headline: Stop Buying "Leads." Start Architecting Revenue. CTA: Apply for a Diagnostic Audit (Scrolls to Booking Section). Sub: 100% Performance-Based. Zero Retainers.  
* **Problem:** Headline: The "Pineapple on Pizza" Agency Model is Costing You Hundreds of Thousands. (Cols: Discount Trap, Blind Attribution, CMO Slide Deck).  
* **Solution:** Headline: Neurolinguistic Revenue Architecture (NRA). (Pillars: NLP-Optimized Multimedia, Frictionless Conversion Infrastructure, Full-Stack EMR Reconciliation).  
* **Risk Reversal:** Headline: We Absorb the Risk. You Scale the Revenue. Body: Zero retainers. Compensated only on net-new, verified revenue.  
* **FINAL BOOKING SECTION (Inline Calendar):** Headline: Let's Audit Your Infrastructure. Sub: Select a time below for a strict 15-minute diagnostic protocol. *(Embed Google Calendar full width right here on the landing page)*.

### **5.2 FUNNEL SUB-PAGES (/offer/\* \- Layout B)**

* **/offer/homework:** Headline: Diagnostic Protocol Confirmed. Phase 1: 30-Day Audit (Zero ad spend, setup EMR API tracking). Phase 2: Activating Compensation Model. *(Users are redirected here after booking in the Calendar).*

### **5.3 NEWSLETTER THANK YOU (/newsletter-thank-you \- Layout A)**

*Design: Full viewport height (100vh). Very dramatic, premium feel.*

* **Visual Icon:** Large, glowing \#8224e3 checkmark icon or subtle geometric animation.  
* **Headline:** Welcome to the Architecture.  
* **Body:** Your requested resource is being dispatched to your inbox right now. While you wait, explore our track record of engineering net-new revenue for elite clinics.  
* **CTA Button:** View Verifiable Case Studies (Routes to /proof).  
* **Animation:** Use GSAP to stagger-fade the icon, then headline, then body text, then the CTA button upwards from opacity 0\.

### **5.4 AUTHORITY HUB PAGES (/\* \- Layout A)**

* **/ (Main Homepage):** \* Hero Headline: Engineering Revenue for Europe’s Elite Aesthetic Clinics.  
  * Sub: We replace fragmented marketing with Neurolinguistic Revenue Architecture (NRA). High-net-worth patient acquisition, hard-coded to your EMR, driven purely by performance.  
  * Dual CTAs: "See How It Works" (/architecture) & "Apply for Partnership" (/offer).  
* **/about:** \* Headline: Bridging the Gap Between Clinical Psychology and Revenue Tracking.  
  * Body: Hi, I’m Dino Bešić. As a former CMO and PhD candidate, I built the NRA framework to close the execution gap in the luxury medical aesthetics industry. I don't advise from the sidelines. I embed into your clinic, build the infrastructure, and take on the financial risk alongside you.  
* **/architecture:** \* Headline: The Anatomy of a Million-Euro Patient Acquisition System.  
  * Body: Discover the three pillars of the NRA framework: Pillar I: NLP-Optimized Media. Pillar II: Frictionless Conversion Hubs. Pillar III: EMR Revenue Reconciliation.  
* **/proof:** \* Headline: Verifiable Track Record. Zero Guesswork.  
  * Design: A CMS-driven grid of case studies focusing strictly on *Net-New Revenue*.  
* **/contact:**  
  * Headline: General Inquiries & Press.  
  * Body: For partnership applications, please use our Diagnostic Funnel (/offer). For all other inquiries, contact us below. (Include a simple contact form and list social links).

### **5.5 LEGAL & COMPLIANCE (/\* \- Layout A)**

* **/impressum:** Tvrtka: BEŠIĆ j.d.o.o. za usluge | Adresa: Zagreb, Croatia | Uprava: Dino Bešić | E-mail: dino@marketingbybesic.com | IBAN: HR2624840081135491290 | SWIFT: RZBHHR2XXXX.  
* **/privacy-policy:** Mention GDPR compliance, data collection via SendFox, Meta, and GTM. Right to be forgotten via email request.  
* **/terms-of-service:** Standard site usage terms and intellectual property protections.

## **6\. EXECUTION STEPS FOR QWEN 3.6**

1. **Initialize:** npm create astro@latest (Use empty template, strict TS).  
2. **Install Deps:** npm i @astrojs/node tailwindcss gsap @studio-freight/lenis tinacms @tinacms/cli.  
3. **Configure:** Set output: 'hybrid' in astro.config.mjs with the Node adapter. Configure Tailwind with brand colors. Ensure mobile-first utility classes are prioritized.  
4. **Scaffold Layouts:** Build LayoutAuthority.astro and LayoutFunnel.astro. Inject the GTM/Meta scripts conditionally based on a GDPR state. Include social links in the footer.  
5. **Build API:** Create /api/subscribe.ts for secure SendFox relay.  
6. **Build Pages:** Scaffold the /offer funnel (including the inline Google Calendar embed) with GSAP animations, followed by the complete Authority pages using the copy provided in Section 5\. Ensure perfect mobile rendering (stack columns, scale typography, resize paddings).