import { e as createComponent, m as maybeRenderHead, k as renderScript, r as renderTemplate, l as renderComponent } from '../chunks/astro/server_CIWKdfaW.mjs';
import 'piccolore';
import { $ as $$LayoutAuthority } from '../chunks/LayoutAuthority_BLfXERCe.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Subscribe = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full max-w-md mx-auto"> <form id="subscribe-form" class="flex flex-col sm:flex-row gap-3"> <div class="flex-1"> <input type="email" name="email" placeholder="Enter your email" required class="w-full px-4 py-3 bg-bg-secondary border border-white/10 rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-brand transition-colors"> </div> <button type="submit" class="btn-primary whitespace-nowrap px-6">
Subscribe
</button> </form> <p id="form-message" class="mt-3 text-sm hidden"></p> </div> ${renderScript($$result, "/Users/zmaj/Documents/13. Jdoo/Website - MarketingbyBesic/src/components/Subscribe.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/zmaj/Documents/13. Jdoo/Website - MarketingbyBesic/src/components/Subscribe.astro", void 0);

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutAuthority", $$LayoutAuthority, { "title": "Blog | Marketing by Be\u0161i\u0107" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-screen py-20 md:py-32"> <div class="container-custom max-w-5xl"> <div class="text-center mb-16"> <h1 class="heading-xl mb-6">
Insights & Analysis
</h1> <p class="body-lg max-w-3xl mx-auto">
Deep dives into patient acquisition, revenue architecture, and the psychology of high-net-worth decision-making.
</p> </div> <!-- Blog Posts Grid (Placeholder for TinaCMS content) --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <!-- Blog Post Placeholder 1 --> <article class="bg-bg-secondary border border-white/5 rounded-xl overflow-hidden hover:border-brand/30 transition-colors"> <div class="aspect-video bg-bg-primary flex items-center justify-center"> <span class="text-text-secondary text-sm">Featured Image</span> </div> <div class="p-6"> <time class="text-text-secondary text-xs uppercase tracking-wider">Coming Soon</time> <h2 class="font-heading text-lg font-semibold mt-2 mb-3">The Death of the Marketing Retainer</h2> <p class="body-md">
Why performance-based models are the future of MedSpa client acquisition.
</p> </div> </article> <!-- Blog Post Placeholder 2 --> <article class="bg-bg-secondary border border-white/5 rounded-xl overflow-hidden hover:border-brand/30 transition-colors"> <div class="aspect-video bg-bg-primary flex items-center justify-center"> <span class="text-text-secondary text-sm">Featured Image</span> </div> <div class="p-6"> <time class="text-text-secondary text-xs uppercase tracking-wider">Coming Soon</time> <h2 class="font-heading text-lg font-semibold mt-2 mb-3">EMR Integration: The Missing Link</h2> <p class="body-md">
How connecting your EMR to your marketing stack reveals hidden revenue streams.
</p> </div> </article> <!-- Blog Post Placeholder 3 --> <article class="bg-bg-secondary border border-white/5 rounded-xl overflow-hidden hover:border-brand/30 transition-colors"> <div class="aspect-video bg-bg-primary flex items-center justify-center"> <span class="text-text-secondary text-sm">Featured Image</span> </div> <div class="p-6"> <time class="text-text-secondary text-xs uppercase tracking-wider">Coming Soon</time> <h2 class="font-heading text-lg font-semibold mt-2 mb-3">NLP in Aesthetic Marketing</h2> <p class="body-md">
Using neurolinguistic patterns to craft ads that resonate with affluent patients.
</p> </div> </article> </div> <!-- Newsletter Signup --> <div class="mt-20 text-center bg-bg-secondary border border-white/5 rounded-xl p-8 md:p-12"> <h2 class="heading-md mb-4">Stay Ahead of the Curve</h2> <p class="body-md mb-8">
Get weekly insights on patient acquisition and revenue architecture delivered to your inbox.
</p> ${renderComponent($$result2, "Subscribe", $$Subscribe, {})} </div> </div> </section> ` })}`;
}, "/Users/zmaj/Documents/13. Jdoo/Website - MarketingbyBesic/src/pages/blog.astro", void 0);

const $$file = "/Users/zmaj/Documents/13. Jdoo/Website - MarketingbyBesic/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
