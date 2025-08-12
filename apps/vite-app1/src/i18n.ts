import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { commonEN, commonZH } from '@wisland/i18n'
import zhCN from './locales/zh/home'
import enUS from './locales/en/home'

const resources = {
    'zh-CN': { translation: { ...commonZH, ...zhCN } },
    'en-US': { translation: { ...commonEN, ...enUS } },
}

i18n.use(initReactI18next).init({
    resources,
    lng: 'zh-CN',
    fallbackLng: 'en-US',
    interpolation: { escapeValue: false },
})

export default i18n


