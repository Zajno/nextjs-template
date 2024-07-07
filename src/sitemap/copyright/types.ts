
export const languages = Object.freeze({
    en: 'English',
    ja: 'Japan',
});

export const defaultLang: Locales = 'en';

export type Locales = keyof typeof languages;

export type PageCopyright<T extends object> = Record<Locales, T>;
