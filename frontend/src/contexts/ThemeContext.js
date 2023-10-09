import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Export functions separately
export function useDarkMode() {
  const { darkMode } = useContext(ThemeContext);
  return darkMode;
}

export function useToggleDarkMode() {
  const { toggleDarkMode } = useContext(ThemeContext);
  return toggleDarkMode;
}
