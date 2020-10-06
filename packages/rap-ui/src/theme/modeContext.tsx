import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react"
import { RapUIThemeMode } from "../types"

export interface ThemeModeContext {
  mode: RapUIThemeMode
  setMode: Dispatch<SetStateAction<RapUIThemeMode>>
}
export const ThemeModeContext = createContext<ThemeModeContext>(null)

const ThemeModeProvider: React.FC = ({ children }) => {
  const [mode, setMode] = useState<RapUIThemeMode>("lightmode")
  document.body.classList.add(mode)
  
  return (
    <ThemeModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeModeContext.Provider>
  )
}

export default ThemeModeProvider
