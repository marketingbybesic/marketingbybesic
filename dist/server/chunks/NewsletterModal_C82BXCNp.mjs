import { e as createComponent, m as maybeRenderHead, k as renderScript, r as renderTemplate } from './astro/server_CIWKdfaW.mjs';
import 'piccolore';
import 'clsx';

const $$CookieConsent = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="cookie-consent" class="fixed bottom-0 left-0 w-full z-[99999] bg-[#0A0A0A] border-t border-[#8224e3] p-4 hidden"> <div class="container-custom flex flex-col md:flex-row items-center justify-between gap-4"> <p class="text-text-secondary text-sm text-center md:text-left">
We use cookies and conversion tracking to architect a better experience. By continuing, you agree to our <a href="/privacy-policy" class="text-brand hover:underline">Privacy Policy</a>.
</p> <div class="flex items-center gap-4"> <button id="cookie-decline" class="px-6 py-2 border border-white/20 text-text-secondary hover:text-text-primary transition-colors text-sm rounded">
Decline
</button> <button id="cookie-accept" class="px-6 py-2 bg-[#8224e3] text-white text-sm rounded hover:bg-[#6e1dc4] transition-colors">
Accept
</button> </div> </div> </div> ${renderScript($$result, "/Users/zmaj/Documents/13. Jdoo/Website - MarketingbyBesic/src/components/CookieConsent.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/zmaj/Documents/13. Jdoo/Website - MarketingbyBesic/src/components/CookieConsent.astro", void 0);

const $$NewsletterModal = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Newsletter Modal Overlay -->${maybeRenderHead()}<div id="newsletter-modal" class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 hidden"> <div class="bg-[#111111] border border-[#8224e3]/30 rounded-xl p-6 max-w-sm shadow-2xl shadow-brand/20 relative mx-4"> <button id="newsletter-close" class="absolute top-2 right-2 text-text-secondary hover:text-text-primary transition-colors"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <h3 class="font-heading text-lg font-bold mb-2">Stay Ahead of the Curve</h3> <p class="text-text-secondary text-sm mb-4">Get exclusive insights on Neurolinguistic Revenue Architecture delivered to your inbox.</p> <form id="newsletter-form" class="flex flex-col gap-3"> <input type="email" name="email" placeholder="Enter your email" required class="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-brand transition-colors"> <button type="submit" class="btn-primary text-sm px-6 py-3">
Subscribe
</button> </form> <p id="newsletter-message" class="mt-3 text-sm hidden"></p> </div> </div> ${renderScript($$result, "/Users/zmaj/Documents/13. Jdoo/Website - MarketingbyBesic/src/components/NewsletterModal.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/zmaj/Documents/13. Jdoo/Website - MarketingbyBesic/src/components/NewsletterModal.astro", void 0);

export { $$NewsletterModal as $, $$CookieConsent as a };
