// functional component for App.js
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./containers";
import { ResultTempProvider } from "./context/ResultTempContext";
import { SearchProvider } from "./context/SearchContext";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.title = "Google";
  }, []);

  return (
    <SearchProvider>
      <div className={`${darkMode && 'dark'}`}>
        <div className="bg-[#FFFFFF] dark:bg-dark-primary min-h-screen max-w-full overflow-x-hidden">
          <Header />
          <ResultTempProvider>
            <Outlet />
          </ResultTempProvider>
        </div>
      </div>
    </SearchProvider>
  );
};

export default App;
