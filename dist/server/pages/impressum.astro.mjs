import { e as createComponent, l as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CIWKdfaW.mjs';
import 'piccolore';
import { $ as $$LayoutAuthority } from '../chunks/LayoutAuthority_BLfXERCe.mjs';
export { renderers } from '../renderers.mjs';

const $$Impressum = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutAuthority", $$LayoutAuthority, { "title": "Impressum | Marketing by Be\u0161i\u0107" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-screen py-20 md:py-32"> <div class="container-custom max-w-3xl"> <h1 class="heading-xl mb-12">Impressum</h1> <div class="prose prose-lg prose-invert max-w-none space-y-8"> <section> <h2 class="heading-md mb-4">Angaben gemäß § 5 TMG</h2> <div class="body-md space-y-1"> <p><strong>Tvrtka:</strong> BEŠIĆ j.d.o.o. za usluge</p> <p><strong>Adresa:</strong> Zagreb, Croatia</p> <p><strong>Uprava:</strong> Dino Bešić</p> <p><strong>E-mail:</strong> <a href="mailto:info@marketingbybesic.com" class="text-brand hover:underline">info@marketingbybesic.com</a></p> </div> </section> <section> <h2 class="heading-md mb-4">Bankverbindung</h2> <div class="body-md space-y-1"> <p><strong>IBAN:</strong> HR2624840081135491290</p> <p><strong>SWIFT/BIC:</strong> RZBHHR2XXXX</p> </div> </section> <section> <h2 class="heading-md mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2> <p class="body-md">
Dino Bešić<br>
Zagreb, Croatia
</p> </section> <section> <h2 class="heading-md mb-4">Streitschlichtung</h2> <p class="body-md">
Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" class="text-brand hover:underline">https://ec.europa.eu/consumers/odr</a>. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
</p> </section> <section> <h2 class="heading-md mb-4">Haftung für Inhalte</h2> <p class="body-md">
Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
</p> </section> </div> </div> </section> ` })}`;
}, "/Users/zmaj/Documents/13. Jdoo/Website - MarketingbyBesic/src/pages/impressum.astro", void 0);

const $$file = "/Users/zmaj/Documents/13. Jdoo/Website - MarketingbyBesic/src/pages/impressum.astro";
const $$url = "/impressum";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Impressum,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
