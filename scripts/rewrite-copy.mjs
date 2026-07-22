#!/usr/bin/env node
/**
 * One-off copy rewrite across all six locales.
 *
 * The old homepage led with NLP and persuasion language ("bypass skepticism",
 * "build subconscious trust"). Selling measurement honesty while describing
 * yourself as someone who bypasses skepticism is a contradiction a technical
 * buyer notices, so the pitch now leads with the tracking problem and keeps
 * the psychology as something measured rather than claimed.
 *
 * Run: node scripts/rewrite-copy.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const DIR = new URL('../src/i18n/', import.meta.url).pathname;

const COPY = {
  en: {
    tagline: 'Revenue measurement and growth for companies spending real money on ads.',
    heroDesc: 'Most companies spending €20k+ a month on ads cannot prove where a quarter of their revenue came from. We fix the measurement, then act on what it shows.',
    problemDesc: 'Agencies report on clicks. Your bank account reports on revenue. Those two numbers stopped matching in 2021, and most companies never noticed.',
    nlpTitle: 'Where the money leaks.',
    nlpDesc1: 'Since iOS 14, browser pixels lose 20 to 40 percent of conversions. Consent banners and ad blockers take more. Your ad platforms optimise on whatever survives, which means they have been spending your budget on partial data for years.',
    nlpDesc2: 'That is the technical half. The other half is knowing what people actually respond to. A background in behavioural psychology and neurolinguistics is useful here, but only if you can measure whether it worked. We build the measurement first. Then the psychology is something you can check instead of something you have to believe.',
    pillar1Title: 'Message and Creative',
    pillar1Desc: 'Language built on how decisions actually get made, then measured, so you know which version earned the money.',
    pillar2Title: 'Frictionless Conversion',
    pillar2Desc: 'Infrastructure that removes the drop-off between interest and commitment. Fast pages, clean forms, nothing in the way.',
    pillar3Title: 'Closed-Loop Measurement',
    pillar3Desc: 'Server-side tracking that ties every euro of spend to verified revenue. Meta CAPI, GTM server-side, Consent Mode v2, deduplication done properly.',
  },
  hr: {
    tagline: 'Mjerenje prihoda i rast za tvrtke koje na oglase troše ozbiljan novac.',
    heroDesc: 'Većina tvrtki koje na oglase troše 20.000 eura mjesečno ne može dokazati odakle im je došla četvrtina prihoda. Popravljamo mjerenje, zatim djelujemo na temelju onoga što pokaže.',
    problemDesc: 'Agencije izvještavaju o klikovima. Vaš bankovni račun izvještava o prihodu. Te dvije brojke prestale su se poklapati 2021., a većina tvrtki to nije primijetila.',
    nlpTitle: 'Gdje novac curi.',
    nlpDesc1: 'Od iOS-a 14 preglednički pikseli gube 20 do 40 posto konverzija. Consent baneri i blokatori oglasa uzimaju još. Vaše oglasne platforme optimiziraju na ono što preostane, što znači da godinama troše vaš budžet na nepotpune podatke.',
    nlpDesc2: 'To je tehnička polovica. Druga je znati na što ljudi zapravo reagiraju. Podloga u bihevioralnoj psihologiji i neurolingvistici tu je korisna, ali samo ako možete izmjeriti je li djelovala. Prvo gradimo mjerenje. Onda je psihologija nešto što provjeravate, a ne nešto u što morate vjerovati.',
    pillar1Title: 'Poruka i kreativa',
    pillar1Desc: 'Jezik građen na tome kako se odluke stvarno donose, pa izmjeren, da znate koja je verzija zaradila novac.',
    pillar2Title: 'Konverzija bez trenja',
    pillar2Desc: 'Infrastruktura koja uklanja odustajanje između interesa i obveze. Brze stranice, čiste forme, ništa na putu.',
    pillar3Title: 'Mjerenje u zatvorenoj petlji',
    pillar3Desc: 'Server-side praćenje koje svaki euro potrošnje veže uz provjeren prihod. Meta CAPI, GTM server-side, Consent Mode v2, ispravna deduplikacija.',
  },
  de: {
    tagline: 'Umsatzmessung und Wachstum für Unternehmen, die ernsthaft in Werbung investieren.',
    heroDesc: 'Die meisten Unternehmen, die monatlich 20.000 Euro für Werbung ausgeben, können nicht belegen, woher ein Viertel ihres Umsatzes kam. Wir reparieren die Messung und handeln dann nach dem, was sie zeigt.',
    problemDesc: 'Agenturen berichten über Klicks. Ihr Bankkonto berichtet über Umsatz. Diese beiden Zahlen stimmen seit 2021 nicht mehr überein, und die meisten Unternehmen haben es nie bemerkt.',
    nlpTitle: 'Wo das Geld verloren geht.',
    nlpDesc1: 'Seit iOS 14 verlieren Browser-Pixel 20 bis 40 Prozent der Conversions. Consent-Banner und Adblocker nehmen weitere. Ihre Werbeplattformen optimieren auf das, was übrig bleibt, und geben Ihr Budget seit Jahren auf Basis unvollständiger Daten aus.',
    nlpDesc2: 'Das ist die technische Hälfte. Die andere ist zu wissen, worauf Menschen tatsächlich reagieren. Ein Hintergrund in Verhaltenspsychologie und Neurolinguistik hilft hier, aber nur wenn sich messen lässt, ob es funktioniert hat. Wir bauen zuerst die Messung. Dann ist die Psychologie etwas, das Sie prüfen können, statt etwas, das Sie glauben müssen.',
    pillar1Title: 'Botschaft und Kreation',
    pillar1Desc: 'Sprache, die darauf aufbaut, wie Entscheidungen wirklich getroffen werden, und danach gemessen wird, damit Sie wissen, welche Version den Umsatz gebracht hat.',
    pillar2Title: 'Reibungslose Conversion',
    pillar2Desc: 'Infrastruktur, die den Absprung zwischen Interesse und Abschluss beseitigt. Schnelle Seiten, saubere Formulare, nichts im Weg.',
    pillar3Title: 'Messung im geschlossenen Kreislauf',
    pillar3Desc: 'Server-seitiges Tracking, das jeden Euro Werbeausgabe mit belegtem Umsatz verbindet. Meta CAPI, GTM server-side, Consent Mode v2, saubere Deduplizierung.',
  },
  it: {
    tagline: 'Misurazione dei ricavi e crescita per aziende che investono seriamente in pubblicità.',
    heroDesc: 'La maggior parte delle aziende che spendono oltre 20.000 euro al mese in pubblicità non riesce a dimostrare da dove sia arrivato un quarto dei ricavi. Sistemiamo la misurazione, poi agiamo su ciò che rivela.',
    problemDesc: 'Le agenzie riportano i clic. Il Suo conto bancario riporta i ricavi. Quei due numeri hanno smesso di coincidere nel 2021, e quasi nessuno se ne è accorto.',
    nlpTitle: 'Dove si perde il denaro.',
    nlpDesc1: 'Da iOS 14 i pixel del browser perdono dal 20 al 40 percento delle conversioni. I banner di consenso e gli ad blocker ne tolgono altre. Le piattaforme pubblicitarie ottimizzano su ciò che resta, spendendo il Suo budget su dati parziali da anni.',
    nlpDesc2: 'Questa è la metà tecnica. L\'altra è sapere a cosa le persone rispondono davvero. Una formazione in psicologia comportamentale e neurolinguistica serve qui, ma solo se è possibile misurare se ha funzionato. Prima costruiamo la misurazione. Poi la psicologia diventa qualcosa da verificare invece che da credere.',
    pillar1Title: 'Messaggio e creatività',
    pillar1Desc: 'Linguaggio costruito su come le decisioni vengono prese davvero, poi misurato, così sa quale versione ha portato i ricavi.',
    pillar2Title: 'Conversione senza attriti',
    pillar2Desc: 'Infrastruttura che elimina l\'abbandono tra interesse e impegno. Pagine veloci, moduli puliti, nessun ostacolo.',
    pillar3Title: 'Misurazione a ciclo chiuso',
    pillar3Desc: 'Tracciamento server-side che lega ogni euro di spesa a ricavi verificati. Meta CAPI, GTM server-side, Consent Mode v2, deduplicazione fatta bene.',
  },
  es: {
    tagline: 'Medición de ingresos y crecimiento para empresas que invierten en serio en publicidad.',
    heroDesc: 'La mayoría de empresas que gastan más de 20.000 euros al mes en publicidad no puede demostrar de dónde vino una cuarta parte de sus ingresos. Arreglamos la medición y luego actuamos sobre lo que revela.',
    problemDesc: 'Las agencias informan sobre clics. Su cuenta bancaria informa sobre ingresos. Esos dos números dejaron de coincidir en 2021, y casi nadie lo notó.',
    nlpTitle: 'Dónde se pierde el dinero.',
    nlpDesc1: 'Desde iOS 14, los píxeles del navegador pierden entre el 20 y el 40 por ciento de las conversiones. Los banners de consentimiento y los bloqueadores se llevan más. Sus plataformas optimizan sobre lo que queda, gastando su presupuesto con datos parciales desde hace años.',
    nlpDesc2: 'Esa es la mitad técnica. La otra es saber a qué responde realmente la gente. Una formación en psicología conductual y neurolingüística sirve aquí, pero solo si se puede medir si funcionó. Primero construimos la medición. Después la psicología es algo que se comprueba en lugar de algo que hay que creer.',
    pillar1Title: 'Mensaje y creatividad',
    pillar1Desc: 'Lenguaje construido sobre cómo se toman realmente las decisiones, y luego medido, para saber qué versión generó los ingresos.',
    pillar2Title: 'Conversión sin fricción',
    pillar2Desc: 'Infraestructura que elimina el abandono entre el interés y el compromiso. Páginas rápidas, formularios limpios, nada en medio.',
    pillar3Title: 'Medición de ciclo cerrado',
    pillar3Desc: 'Seguimiento del lado del servidor que vincula cada euro de gasto con ingresos verificados. Meta CAPI, GTM server-side, Consent Mode v2, deduplicación bien hecha.',
  },
  fr: {
    tagline: 'Mesure des revenus et croissance pour les entreprises qui investissent sérieusement en publicité.',
    heroDesc: 'La plupart des entreprises qui dépensent plus de 20 000 euros par mois en publicité ne peuvent pas prouver d\'où vient un quart de leur chiffre d\'affaires. Nous réparons la mesure, puis agissons sur ce qu\'elle révèle.',
    problemDesc: 'Les agences rendent compte des clics. Votre compte bancaire rend compte du chiffre d\'affaires. Ces deux chiffres ont cessé de correspondre en 2021, et presque personne ne l\'a remarqué.',
    nlpTitle: 'Où l\'argent se perd.',
    nlpDesc1: 'Depuis iOS 14, les pixels navigateur perdent 20 à 40 pour cent des conversions. Les bannières de consentement et les bloqueurs en prennent davantage. Vos plateformes optimisent sur ce qui reste, dépensant votre budget sur des données partielles depuis des années.',
    nlpDesc2: 'Voilà pour la moitié technique. L\'autre consiste à savoir ce à quoi les gens réagissent vraiment. Une formation en psychologie comportementale et en neurolinguistique aide ici, mais seulement si l\'on peut mesurer si cela a fonctionné. Nous construisons d\'abord la mesure. Ensuite la psychologie devient quelque chose que l\'on vérifie plutôt que quelque chose qu\'il faut croire.',
    pillar1Title: 'Message et création',
    pillar1Desc: 'Un langage fondé sur la façon dont les décisions se prennent réellement, puis mesuré, pour savoir quelle version a généré le chiffre d\'affaires.',
    pillar2Title: 'Conversion sans friction',
    pillar2Desc: 'Une infrastructure qui supprime l\'abandon entre l\'intérêt et l\'engagement. Pages rapides, formulaires clairs, rien qui gêne.',
    pillar3Title: 'Mesure en boucle fermée',
    pillar3Desc: 'Suivi côté serveur qui relie chaque euro dépensé à un chiffre d\'affaires vérifié. Meta CAPI, GTM server-side, Consent Mode v2, déduplication correcte.',
  },
};

let changed = 0;
for (const [lang, copy] of Object.entries(COPY)) {
  const file = path.join(DIR, `${lang}.json`);
  if (!fs.existsSync(file)) { console.log(`skip ${lang}: no file`); continue; }

  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  data.home = data.home || {};

  for (const [key, value] of Object.entries(copy)) {
    if (key === 'tagline') {
      // tagline lives outside home in some locales
      if (data.home.tagline !== undefined) data.home.tagline = value;
      if (data.footer?.tagline !== undefined) data.footer.tagline = value;
      if (data.nav?.tagline !== undefined) data.nav.tagline = value;
      continue;
    }
    if (data.home[key] !== undefined) { data.home[key] = value; changed++; }
  }

  fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`updated ${lang}.json`);
}
console.log(`\n${changed} keys rewritten across ${Object.keys(COPY).length} locales`);
