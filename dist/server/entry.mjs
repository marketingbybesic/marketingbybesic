import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Bi3RPq6p.mjs';
import { manifest } from './manifest_BJqRZ0Nd.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/subscribe.astro.mjs');
const _page2 = () => import('./pages/blog.astro.mjs');
const _page3 = () => import('./pages/impressum.astro.mjs');
const _page4 = () => import('./pages/newsletter-thank-you.astro.mjs');
const _page5 = () => import('./pages/offer-clinics.astro.mjs');
const _page6 = () => import('./pages/offer-fitness.astro.mjs');
const _page7 = () => import('./pages/offer-luxury.astro.mjs');
const _page8 = () => import('./pages/offer-restaurant.astro.mjs');
const _page9 = () => import('./pages/privacy-policy.astro.mjs');
const _page10 = () => import('./pages/terms-of-service.astro.mjs');
const _page11 = () => import('./pages/_lang_/about.astro.mjs');
const _page12 = () => import('./pages/_lang_/architecture.astro.mjs');
const _page13 = () => import('./pages/_lang_/contact.astro.mjs');
const _page14 = () => import('./pages/_lang_/proof.astro.mjs');
const _page15 = () => import('./pages/_lang_.astro.mjs');
const _page16 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/api/subscribe.ts", _page1],
    ["src/pages/blog.astro", _page2],
    ["src/pages/impressum.astro", _page3],
    ["src/pages/newsletter-thank-you.astro", _page4],
    ["src/pages/offer-clinics/index.astro", _page5],
    ["src/pages/offer-fitness/index.astro", _page6],
    ["src/pages/offer-luxury/index.astro", _page7],
    ["src/pages/offer-restaurant/index.astro", _page8],
    ["src/pages/privacy-policy.astro", _page9],
    ["src/pages/terms-of-service.astro", _page10],
    ["src/pages/[lang]/about.astro", _page11],
    ["src/pages/[lang]/architecture.astro", _page12],
    ["src/pages/[lang]/contact.astro", _page13],
    ["src/pages/[lang]/proof.astro", _page14],
    ["src/pages/[lang]/index.astro", _page15],
    ["src/pages/index.astro", _page16]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///Users/zmaj/Documents/13.%20Jdoo/Website%20-%20MarketingbyBesic/dist/client/",
    "server": "file:///Users/zmaj/Documents/13.%20Jdoo/Website%20-%20MarketingbyBesic/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro",
    "experimentalStaticHeaders": false
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
