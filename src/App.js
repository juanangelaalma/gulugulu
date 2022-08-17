// functional component for App.js
import React from "react";
import Header from "./containers/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-dark-primary">
      <Header />
      <div className="pl-5 py-4 md:pl-[12%]">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
