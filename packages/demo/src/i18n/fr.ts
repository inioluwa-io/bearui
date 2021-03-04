import { TranslationMessages } from "ra-core"
import frenchMessages from "ra-language-french"

const customFrenchMessages: TranslationMessages = {
  ...frenchMessages,
  greetings: {
    hello: "Bonjour",
  },
}

export default customFrenchMessages
