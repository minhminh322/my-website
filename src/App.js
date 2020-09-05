import React from "react";
import "./assets/_base.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faMoon } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

import MasterContextProvider from "./context/MasterContext";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useLocation, useHistory } from "react-router-dom";
import { far, faCircle } from "@fortawesome/free-regular-svg-icons";

import { Presentation } from "./layout/blueprints/Presentation";
import { Routes } from "./Routes";
library.add(fas, far, faMoon, faCircle);
function App() {
  return (
    <MasterContextProvider>
      {/* <AnimatePresence> */}
      <Router>
        <Routes />
      </Router>
    </MasterContextProvider>
  );
}

export default App;
