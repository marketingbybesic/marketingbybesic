import en from './en.json';
import de from './de.json';
import fr from './fr.json';
import es from './es.json';
import it from './it.json';
import hr from './hr.json';

export type SupportedLocale = 'en' | 'de' | 'fr' | 'es' | 'it' | 'hr';

const translations: Record<SupportedLocale, typeof en> = {
  en,
  de,
  fr,
  es,
  it,
  hr,
};

export function getTranslations(lang: string): typeof en {
  const locale = lang as SupportedLocale;
  return translations[locale] ?? translations['en'];
}

export function isValidLocale(lang: string): lang is SupportedLocale {
  return ['en', 'de', 'fr', 'es', 'it', 'hr'].includes(lang);
}
