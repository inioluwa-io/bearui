import polyglotI8nProvider from "ra-i18n-polyglot"
import englishMessages from "../i18n/en"
import frenchMessages from "../i18n/fr"

const messages: any = {
  en: englishMessages,
  fr: frenchMessages,
}

const i18nProvider = polyglotI8nProvider((locale: any) => {
  return messages[locale]
}, "en")

export default i18nProvider
