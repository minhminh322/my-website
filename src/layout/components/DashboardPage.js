import React, { useContext, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useLocation, useHistory } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HeaderMain from "./Header/HeaderMain";
import { MasterContext } from "../../contexts/MasterContext";
import { LeftSidebar } from "./LeftSidebar";
import MyHomePage from "../../features/Home/HomeMain";
import PomodoroApp from "../../features/PomodoroApp/PomodoroMain";
import YoutubeApp from "../../features/YoutubeApp/YoutubeMain";

export const DashboardPage = (props) => {
  const { children } = props;
  const { master } = useContext(MasterContext);
  const isLightTheme = master.theme.isLightTheme;

  return (
    <div className={isLightTheme ? "light-mode" : "dark-mode"} style={{ transition: "all .5s ease" }}>
      <div className="app">
        <LeftSidebar />
        <div className="app-wrapper">
          <div className="app-header">
            <HeaderMain />
          </div>
          <div className="app-main">{children}</div>
        </div>
      </div>
    </div>
  );
};
