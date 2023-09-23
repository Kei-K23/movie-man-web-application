// import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "../hooks/useDarkMode";
import { useState } from "react";

const DarkModeSwitcher = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [isDark, setIsDark] = useState(colorTheme === "dark" ? true : false);

  const toggleDarkMode = () => {
    if (isDark) {
      setTheme(colorTheme);
      setIsDark(false);
    } else {
      setTheme(colorTheme);
      setIsDark(true);
    }
  };

  return (
    <button
      id="darkMode"
      onClick={toggleDarkMode}
      aria-label="dark and light mode"
      title={isDark ? "Dark mode" : "Light mode"}
    >
      {isDark ? (
        <i className="text-2xl fa-solid fa-moon"></i>
      ) : (
        <i className="text-2xl fa-solid fa-sun text-slate-200"></i>
      )}
    </button>
  );
};

export default DarkModeSwitcher;
