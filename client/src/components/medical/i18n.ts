import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translation/en.json';
import fr from './translation/fr.json';
import zh from './translation/zh.json';
import de from './translation/de.json';
import fa from './translation/fa.json';
import ar from './translation/ar.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            fr: { translation: fr },
            zh: { translation: zh },
            de: { translation: de },
            fa: { translation: fa },
            ar: { translation: ar }
        },
        lng: "en", // default language
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    });
export default i18n;