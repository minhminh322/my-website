import React from "react";
import "./assets/_base.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faMoon } from "@fortawesome/free-solid-svg-icons";
import MasterContextProvider from "./contexts/MasterContext";
import { BrowserRouter } from "react-router-dom";
import { far, faCircle } from "@fortawesome/free-regular-svg-icons";
import { Routes } from "./Routes";
library.add(fas, far, faMoon, faCircle);
function App() {
  return (
    <MasterContextProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </MasterContextProvider>
  );
}

export default App;
