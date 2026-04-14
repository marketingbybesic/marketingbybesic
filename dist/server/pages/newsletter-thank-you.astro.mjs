import { e as createComponent, l as renderComponent, r as renderTemplate, m as maybeRenderHead, k as renderScript } from '../chunks/astro/server_CIWKdfaW.mjs';
import 'piccolore';
import { $ as $$LayoutAuthority } from '../chunks/LayoutAuthority_BLfXERCe.mjs';
export { renderers } from '../renderers.mjs';

const $$NewsletterThankYou = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutAuthority", $$LayoutAuthority, { "title": "Welcome to the Architecture | Marketing by Be\u0161i\u0107" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-screen flex items-center justify-center relative overflow-hidden"> <!-- Background Glow --> <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand/10 rounded-full blur-3xl"></div> <div class="container-custom relative z-10 text-center max-w-2xl"> <!-- Animated Checkmark --> <div id="checkmark" class="w-24 h-24 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-8 opacity-0 translate-y-5"> <svg class="w-12 h-12 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <h1 id="headline" class="heading-xl mb-6 opacity-0 translate-y-5">
Welcome to the Architecture.
</h1> <p id="body" class="body-lg mb-10 opacity-0 translate-y-5">
Your requested resource is being dispatched to your inbox right now. While you wait, explore our track record of engineering net-new revenue for elite clinics.
</p> <div id="cta" class="opacity-0 translate-y-5"> <a href="/proof" class="btn-primary text-lg px-10 py-5">
View Verifiable Case Studies
</a> </div> </div> </section>  ${renderScript($$result2, "/Users/zmaj/Documents/13. Jdoo/Website - MarketingbyBesic/src/pages/newsletter-thank-you.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/zmaj/Documents/13. Jdoo/Website - MarketingbyBesic/src/pages/newsletter-thank-you.astro", void 0);

const $$file = "/Users/zmaj/Documents/13. Jdoo/Website - MarketingbyBesic/src/pages/newsletter-thank-you.astro";
const $$url = "/newsletter-thank-you";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$NewsletterThankYou,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
