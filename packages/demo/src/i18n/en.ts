import { TranslationMessages } from "ra-core"
import englishMessages from "ra-language-english"

const customEnglishMessages: TranslationMessages = {
  ...englishMessages,
  network: {
    error: {
      could_not_fetch: "Could not fetch ",
    },
  },
  greetings: {
    hello: "Hello",
  },
}

export default customEnglishMessages
