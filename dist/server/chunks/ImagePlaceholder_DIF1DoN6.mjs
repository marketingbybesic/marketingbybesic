import { e as createComponent, m as maybeRenderHead, g as addAttribute, r as renderTemplate, h as createAstro } from './astro/server_CIWKdfaW.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$ImagePlaceholder = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ImagePlaceholder;
  const { imageName, className = "", height = "400px" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`image-placeholder ${className}`, "class")}${addAttribute(`height: ${height};`, "style")}${addAttribute(imageName, "data-image-name")} data-astro-cid-7gbln5j5> <div class="placeholder-content" data-astro-cid-7gbln5j5> <svg class="placeholder-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-7gbln5j5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-7gbln5j5></path> </svg> <p class="placeholder-text" data-astro-cid-7gbln5j5>
[PLACEHOLDER: Add background image named '${imageName}' to public/images/]
</p> </div> </div> `;
}, "/Users/zmaj/Documents/13. Jdoo/Website - MarketingbyBesic/src/components/ImagePlaceholder.astro", void 0);

export { $$ImagePlaceholder as $ };
