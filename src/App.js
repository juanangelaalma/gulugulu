// functional component for App.js
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./containers";
import { ResultTempProvider } from "./context/ResultTempContext";
import { SearchProvider } from "./context/SearchContext";
import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode", false);
  const [isDarkMode, setIsDarkMode] = useState(darkMode);

  useEffect(() => {
    document.title = "Google";
  }, []);

  useEffect(() => {
    setDarkMode(isDarkMode);
  }, [isDarkMode]);

  return (
    <SearchProvider>
      <div className={`${isDarkMode ? 'dark' : ''}`}>
        <div className="bg-[#FFFFFF] dark:bg-dark-primary min-h-screen max-w-full overflow-x-hidden">
          <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <ResultTempProvider>
            <Outlet />
          </ResultTempProvider>
        </div>
      </div>
    </SearchProvider>
  );
};

export default App;
