import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

const defaultLanguage = 'en';
const savedLanguage = localStorage.getItem('lng') || defaultLanguage;

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    fallbackLng: defaultLanguage,
    lng: savedLanguage,
    debug: false,

    resources: {
      en: {
        translation: require('./locales/en.json'),
      },
      ru: {
        translation: require('./locales/ru.json'),
      },
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;