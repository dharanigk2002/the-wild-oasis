import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme:dark)").matches,
    "isDarkMode"
  );

  useEffect(() => {
    const rootEl = document.documentElement;
    if (isDarkMode) {
      rootEl.classList.remove("light-mode");
      rootEl.classList.add("dark-mode");
    } else {
      rootEl.classList.remove("dark-mode");
      rootEl.classList.add("light-mode");
    }
  }, [isDarkMode]);

  function toggleDarkmode() {
    setIsDarkMode((isDark) => !isDark);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkmode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkmode() {
  const context = useContext(DarkModeContext);

  if (!context) throw new Error("Invalid access");

  return context;
}
