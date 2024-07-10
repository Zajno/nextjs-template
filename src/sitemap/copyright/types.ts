
export const languages = Object.freeze({
    en: 'English',
    ja: 'Japan',
});

export const defaultLang = Object.keys(languages)[0] as Locales;

export type Locales = keyof typeof languages;

export type PageCopyright<T extends object> = Record<Locales, T>;
