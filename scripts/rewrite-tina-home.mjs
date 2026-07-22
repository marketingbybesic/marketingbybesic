#!/usr/bin/env node
/**
 * The English root page renders from src/content/pages/home.json (TinaCMS),
 * not from the i18n files, so it kept the old NLP-led copy after the locale
 * rewrite. Same wording as en.json so the two stay in sync.
 */
import fs from 'node:fs';

const FILE = new URL('../src/content/pages/home.json', import.meta.url).pathname;
const d = JSON.parse(fs.readFileSync(FILE, 'utf8'));

d.hero.description =
  'Most companies spending €20k+ a month on ads cannot prove where a quarter of their revenue came from. We fix the measurement, then act on what it shows.';

d.problem.subheading =
  'Agencies report on clicks. Your bank account reports on revenue. Those two numbers stopped matching in 2021, and most companies never noticed.';

d.nlp.heading = 'Where the money leaks.';
d.nlp.body1 =
  'Since iOS 14, browser pixels lose 20 to 40 percent of conversions. Consent banners and ad blockers take more. Your ad platforms optimise on whatever survives, which means they have been spending your budget on partial data for years.';
d.nlp.body2 =
  'That is the technical half. The other half is knowing what people actually respond to. A background in behavioural psychology and neurolinguistics is useful here, but only if you can measure whether it worked. We build the measurement first. Then the psychology is something you can check instead of something you have to believe.';

if (Array.isArray(d.pillars?.items)) {
  const p = [
    { title: 'Message and Creative', description: 'Language built on how decisions actually get made, then measured, so you know which version earned the money.' },
    { title: 'Frictionless Conversion', description: 'Infrastructure that removes the drop-off between interest and commitment. Fast pages, clean forms, nothing in the way.' },
    { title: 'Closed-Loop Measurement', description: 'Server-side tracking that ties every euro of spend to verified revenue. Meta CAPI, GTM server-side, Consent Mode v2, deduplication done properly.' },
  ];
  d.pillars.items = d.pillars.items.map((item, i) =>
    p[i] ? { ...item, title: p[i].title, description: p[i].description } : item
  );
}

if (d.title) d.title = 'Marketing by Bešić — Revenue Measurement and Growth';

fs.writeFileSync(FILE, JSON.stringify(d, null, 2) + '\n', 'utf8');
console.log('home.json rewritten');
