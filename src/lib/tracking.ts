/**
 * Tracking IDs — the single place these are defined.
 *
 * Everything here loads through one shared gtag.js request and only ever after
 * the visitor accepts (see CookieConsent.astro and the layout head blocks).
 * Adding an ID here costs no extra network request: gtag.js is loaded once and
 * each ID is just another `config` call on the same library.
 *
 * To add GA4: paste the Measurement ID (looks like `G-XXXXXXXXXX`) below.
 * Leave it empty and no GA4 config is emitted at all.
 */

/** Google Ads — conversion tracking. */
export const GOOGLE_ADS_ID = 'AW-18343086148';

/** GA4 — behavioural analytics. Empty string disables it. */
export const GA4_ID = '';

/** Every non-empty ID, in load order. Ads first: conversions matter more. */
export const GTAG_IDS = [GOOGLE_ADS_ID, GA4_ID].filter(Boolean);

/** The gtag.js loader URL uses the first ID; the rest are `config` calls. */
export const GTAG_SRC = GTAG_IDS.length
  ? `https://www.googletagmanager.com/gtag/js?id=${GTAG_IDS[0]}`
  : '';
