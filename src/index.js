import messages_ru from './translations/ru.json';
import flatten from 'flat';

const DEFAULT_CONFIG = {
  translations: [{ key: 'ru', messages: flatten(messages_ru) }],
};

export const LanguageRuModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
};
