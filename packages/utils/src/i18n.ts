export type AvailableLocales = 'de' | 'en';
export type AdditionalTranslation = Partial<{ [K in AvailableLocales]: {} }>;
