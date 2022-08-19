// functional component for App.js
import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./containers";
import { ResultTempProvider } from "./context/ResultTempContext";
import { SearchProvider } from "./context/SearchContext";

const App = () => {
  return (
    <SearchProvider>
      <div className="bg-dark-primary min-h-screen max-w-full overflow-x-hidden">
        <Header />
        <div className="px-5 py-4 md:pr-0 md:pl-[12%] w-full">
          <ResultTempProvider>
            <Outlet />
          </ResultTempProvider>
        </div>
      </div>
    </SearchProvider>
  );
};

export default App;
