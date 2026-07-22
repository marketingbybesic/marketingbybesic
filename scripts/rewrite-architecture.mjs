#!/usr/bin/env node
/**
 * Second pass: the Architecture page still carried the worst line on the site.
 *
 *   "...craft multimedia assets that bypass skepticism and build immediate trust"
 *
 * Telling a sceptical buyer you bypass scepticism is a contradiction when the
 * product you sell is honest measurement. The About page keeps its NLP
 * explanation because that is where a reader has already opted into depth;
 * Architecture is a technical page and should read like one.
 */
import fs from 'node:fs';
import path from 'node:path';

const DIR = new URL('../src/i18n/', import.meta.url).pathname;

const COPY = {
  en: {
    pillar1Desc1: 'Language patterns chosen for how decisions actually get made, then A/B tested so the winning version is a measurement rather than an opinion.',
    pillar1Desc2: 'Every ad, video and landing page is treated as a hypothesis. The tracking layer tells us which one earned the revenue.',
    pillar1Visual: 'Message Testing',
  },
  hr: {
    pillar1Desc1: 'Jezični obrasci odabrani prema tome kako se odluke stvarno donose, zatim A/B testirani da pobjednička verzija bude mjerenje, a ne mišljenje.',
    pillar1Desc2: 'Svaki oglas, video i landing stranica tretira se kao hipoteza. Sloj praćenja govori koja je donijela prihod.',
    pillar1Visual: 'Testiranje poruke',
  },
  de: {
    pillar1Desc1: 'Sprachmuster, die daran ausgerichtet sind, wie Entscheidungen wirklich fallen, und anschließend A/B-getestet werden, damit die Gewinnervariante eine Messung ist und keine Meinung.',
    pillar1Desc2: 'Jede Anzeige, jedes Video und jede Landingpage gilt als Hypothese. Die Tracking-Ebene zeigt, welche den Umsatz gebracht hat.',
    pillar1Visual: 'Botschaftstests',
  },
  it: {
    pillar1Desc1: 'Schemi linguistici scelti in base a come le decisioni vengono prese davvero, poi testati in A/B perché la versione vincente sia una misurazione e non un\'opinione.',
    pillar1Desc2: 'Ogni annuncio, video e landing page è trattato come un\'ipotesi. Il livello di tracciamento indica quale ha generato i ricavi.',
    pillar1Visual: 'Test del messaggio',
  },
  es: {
    pillar1Desc1: 'Patrones de lenguaje elegidos según cómo se toman realmente las decisiones, y luego probados en A/B para que la versión ganadora sea una medición y no una opinión.',
    pillar1Desc2: 'Cada anuncio, vídeo y página de destino se trata como una hipótesis. La capa de seguimiento indica cuál generó los ingresos.',
    pillar1Visual: 'Pruebas de mensaje',
  },
  fr: {
    pillar1Desc1: 'Des formulations choisies selon la façon dont les décisions se prennent réellement, puis testées en A/B pour que la version gagnante soit une mesure et non un avis.',
    pillar1Desc2: 'Chaque annonce, vidéo et page de destination est traitée comme une hypothèse. La couche de suivi indique laquelle a généré le chiffre d\'affaires.',
    pillar1Visual: 'Test du message',
  },
};

let changed = 0;
for (const [lang, copy] of Object.entries(COPY)) {
  const file = path.join(DIR, `${lang}.json`);
  if (!fs.existsSync(file)) continue;
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (!data.architecture) continue;
  for (const [k, v] of Object.entries(copy)) {
    if (data.architecture[k] !== undefined) { data.architecture[k] = v; changed++; }
  }
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`updated ${lang}.json`);
}
console.log(`\n${changed} architecture keys rewritten`);
