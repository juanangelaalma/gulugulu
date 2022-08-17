// functional component for App.js
import React from "react";
import Header from "./containers/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-dark-primary min-h-screen">
      <Header />
      <div className="px-5 py-4 md:pr-0 md:pl-[12%] w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
