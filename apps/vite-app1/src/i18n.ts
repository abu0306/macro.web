import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { common_enUS, common_zhCN } from '@wisland/i18n'
import zhCN from './locales/zh-CN'
import enUS from './locales/en-US'

const resources = {
    'zh-CN': { translation: { ...common_zhCN, ...zhCN } },
    'en-US': { translation: { ...common_enUS, ...enUS } },
}

i18n.use(initReactI18next).init({
    resources,
    lng: 'zh-CN',
    fallbackLng: 'en-US',
    interpolation: { escapeValue: false },
})

export default i18n


