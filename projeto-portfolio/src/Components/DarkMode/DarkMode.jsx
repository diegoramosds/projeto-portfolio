import { useState, useEffect } from "react";
import { MoonIcon, Sun } from "lucide-react";
import "./DarkMode.css";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="dark_mode" onClick={toggleDarkMode}>
      {darkMode ? (
        <Sun title={"Modo claro"} className="icon rotate" />
      ) : (
        <MoonIcon title={"Modo escuro"} className="icon rotate" />
      )}
    </div>
  );
};

export default DarkMode;
