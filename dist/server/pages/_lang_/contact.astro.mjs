import { e as createComponent, l as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_CIWKdfaW.mjs';
import 'piccolore';
import { $ as $$LayoutAuthority } from '../../chunks/LayoutAuthority_BLfXERCe.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
function getStaticPaths() {
  return [
    { params: { lang: "en" } },
    { params: { lang: "de" } },
    { params: { lang: "fr" } },
    { params: { lang: "es" } },
    { params: { lang: "it" } },
    { params: { lang: "hr" } }
  ];
}
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const { lang } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "LayoutAuthority", $$LayoutAuthority, { "title": "Contact | Marketing by Be\u0161i\u0107" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="container-custom py-4"> <a${addAttribute(`/${lang}`, "href")} class="text-text-secondary hover:text-brand transition-colors text-sm">
← Back to Home
</a> </div> <section class="min-h-screen py-20 md:py-32"> <div class="container-custom max-w-3xl"> <div class="text-center mb-12"> <h1 class="heading-xl mb-6">
General Inquiries & Press
</h1> <p class="body-lg">
We partner with high-performing businesses to scale their revenue. Fill out the form below or email us directly at <a href="mailto:info@marketingbybesic.com" class="text-brand hover:underline">info@marketingbybesic.com</a> to start the conversation.
</p> </div> <!-- Contact Form --> <form class="bg-bg-secondary border border-white/5 rounded-xl p-8 space-y-6"> <div> <label for="name" class="block text-sm font-medium text-text-secondary mb-2">Name</label> <input type="text" id="name" name="name" required class="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-brand transition-colors" placeholder="Your name"> </div> <div> <label for="email" class="block text-sm font-medium text-text-secondary mb-2">Email</label> <input type="email" id="email" name="email" required class="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-brand transition-colors" placeholder="your@email.com"> </div> <div> <label for="subject" class="block text-sm font-medium text-text-secondary mb-2">Subject</label> <select id="subject" name="subject" class="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-lg text-text-primary focus:outline-none focus:border-brand transition-colors"> <option value="general">General Inquiry</option> <option value="press">Press & Media</option> <option value="partnership">Partnership</option> <option value="other">Other</option> </select> </div> <div> <label for="message" class="block text-sm font-medium text-text-secondary mb-2">Message</label> <textarea id="message" name="message" rows="5" required class="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-brand transition-colors resize-none" placeholder="How can we help?"></textarea> </div> <button type="submit" class="btn-primary w-full">
Send Message
</button> </form> <!-- Social Links --> <div class="mt-12 text-center"> <h3 class="font-heading text-lg font-semibold mb-4">Connect With Us</h3> <div class="flex items-center justify-center gap-6"> <a href="https://www.instagram.com/marketingbybesic" target="_blank" rel="noopener noreferrer" class="text-text-secondary hover:text-brand transition-colors" aria-label="Instagram"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg> </a> <a href="https://www.tiktok.com/@marketingbybesic" target="_blank" rel="noopener noreferrer" class="text-text-secondary hover:text-brand transition-colors" aria-label="TikTok"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.84a4.84 4.84 0 0 1-1-.15z"></path></svg> </a> <a href="https://www.youtube.com/@marketingbybesic" target="_blank" rel="noopener noreferrer" class="text-text-secondary hover:text-brand transition-colors" aria-label="YouTube"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg> </a> <a href="https://www.linkedin.com/company/marketing-by-besic/" target="_blank" rel="noopener noreferrer" class="text-text-secondary hover:text-brand transition-colors" aria-label="LinkedIn"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg> </a> <a href="https://x.com/besicmarketing" target="_blank" rel="noopener noreferrer" class="text-text-secondary hover:text-brand transition-colors" aria-label="X/Twitter"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg> </a> </div> </div> </div> </section> ` })}`;
}, "/Users/zmaj/Documents/13. Jdoo/Website - MarketingbyBesic/src/pages/[lang]/contact.astro", void 0);

const $$file = "/Users/zmaj/Documents/13. Jdoo/Website - MarketingbyBesic/src/pages/[lang]/contact.astro";
const $$url = "/[lang]/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
