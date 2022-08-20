// functional component for App.js
import React, {useEffect} from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./containers";
import { ResultTempProvider } from "./context/ResultTempContext";
import { SearchProvider } from "./context/SearchContext";

const App = () => {
  useEffect(() => {
    document.title = "Google"
  } , [])

  return (
    <SearchProvider>
      <div className="bg-dark-primary min-h-screen max-w-full overflow-x-hidden">
        <Header />
          <ResultTempProvider>
            <Outlet />
          </ResultTempProvider>
      </div>
    </SearchProvider>
  );
};

export default App;
