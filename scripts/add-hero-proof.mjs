#!/usr/bin/env node
/**
 * Adds the two hero proof figures to every locale.
 *
 * The numbers themselves stay identical across languages; only the label
 * that follows them is translated. A figure is the one thing a sceptical
 * buyer remembers well enough to ask about on a call.
 */
import fs from 'node:fs';
import path from 'node:path';

const DIR = new URL('../src/i18n/', import.meta.url).pathname;

const PROOF = {
  en: { proof1Label: 'ROI on a corporate bond restructure', proof2Label: 'raised in under 30 days' },
  hr: { proof1Label: 'ROI na restrukturiranju korporativnih obveznica', proof2Label: 'prikupljeno u manje od 30 dana' },
  de: { proof1Label: 'ROI bei einer Unternehmensanleihen-Restrukturierung', proof2Label: 'in weniger als 30 Tagen eingeworben' },
  it: { proof1Label: 'ROI su una ristrutturazione di obbligazioni societarie', proof2Label: 'raccolti in meno di 30 giorni' },
  es: { proof1Label: 'ROI en una reestructuración de bonos corporativos', proof2Label: 'captados en menos de 30 días' },
  fr: { proof1Label: 'ROI sur une restructuration d\'obligations d\'entreprise', proof2Label: 'levés en moins de 30 jours' },
};

for (const [lang, labels] of Object.entries(PROOF)) {
  const file = path.join(DIR, `${lang}.json`);
  if (!fs.existsSync(file)) continue;
  const d = JSON.parse(fs.readFileSync(file, 'utf8'));
  d.home = d.home || {};
  d.home.proof1Value = '412%';
  d.home.proof2Value = '€660k';
  Object.assign(d.home, labels);
  fs.writeFileSync(file, JSON.stringify(d, null, 2) + '\n', 'utf8');
  console.log(`${lang}: ${labels.proof1Label}`);
}
