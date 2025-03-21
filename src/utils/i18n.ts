import i18n, { t } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from 'i18next-http-backend';


const resources = {
  tr: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      navigator: {
        home: "language",
        about: "Hakkımızda",
        contact: "İletişim",
        services: "Hizmetler",
        blog: "Blog",
        login: "Giriş Yap",
        register: "Kayıt Ol",
      }
    }
  },
  en: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(HttpApi) 
  .init({
    fallbackLng: "tr",
    supportedLngs: ["tr", "en"],
    ns: [ "core" ], // Kullanılan namespace'ler
    defaultNS: "translation",
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    backend: {
      loadPath: '/locales/{{tr}}/{{ns}}.json' 
    }
  });

export default i18n;