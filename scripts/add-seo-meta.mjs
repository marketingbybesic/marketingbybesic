#!/usr/bin/env node
/**
 * Adds a per-locale meta description and page title.
 *
 * Every localised page was inheriting the same English default description,
 * so six language versions competed with identical metadata. Search engines
 * and LinkedIn previews had nothing locale-specific to show.
 *
 * Keys land under `seo` so the layout can read t.seo.title / t.seo.description.
 */
import fs from 'node:fs';
import path from 'node:path';

const DIR = new URL('../src/i18n/', import.meta.url).pathname;

const SEO = {
  en: {
    title: 'Marketing by Bešić — Revenue Measurement and Growth',
    description: 'Server-side conversion tracking for companies spending €20k+ a month on ads. Meta CAPI, GTM server-side, Consent Mode v2. Recover the revenue your platforms cannot see.',
  },
  hr: {
    title: 'Marketing by Bešić — Mjerenje prihoda i rast',
    description: 'Server-side praćenje konverzija za tvrtke koje na oglase troše više od 20.000 eura mjesečno. Meta CAPI, GTM server-side, Consent Mode v2.',
  },
  de: {
    title: 'Marketing by Bešić — Umsatzmessung und Wachstum',
    description: 'Server-seitiges Conversion-Tracking für Unternehmen mit mehr als 20.000 Euro Werbebudget im Monat. Meta CAPI, GTM server-side, Consent Mode v2.',
  },
  it: {
    title: 'Marketing by Bešić — Misurazione dei ricavi e crescita',
    description: 'Tracciamento delle conversioni lato server per aziende che spendono oltre 20.000 euro al mese in pubblicità. Meta CAPI, GTM server-side, Consent Mode v2.',
  },
  es: {
    title: 'Marketing by Bešić — Medición de ingresos y crecimiento',
    description: 'Seguimiento de conversiones del lado del servidor para empresas que gastan más de 20.000 euros al mes en publicidad. Meta CAPI, GTM server-side, Consent Mode v2.',
  },
  fr: {
    title: 'Marketing by Bešić — Mesure des revenus et croissance',
    description: 'Suivi des conversions côté serveur pour les entreprises dépensant plus de 20 000 euros par mois en publicité. Meta CAPI, GTM server-side, Consent Mode v2.',
  },
};

for (const [lang, seo] of Object.entries(SEO)) {
  const file = path.join(DIR, `${lang}.json`);
  if (!fs.existsSync(file)) continue;
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  data.seo = seo;
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`${lang}: title ${seo.title.length} chars, description ${seo.description.length} chars`);
}
console.log('\nTargets: title under 60, description under 160.');
