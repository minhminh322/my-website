import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useLocation, useHistory } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LandingPage from "./layout/components/LandingPage";
import MyHomePage from "./features/Home/HomeMain";
import PomodoroApp from "./features/PomodoroApp/PomodoroMain";
import YoutubeApp from "./features/YoutubeApp/YoutubeMain";
import CovidTrackerApp from "./features/CovidTrackerApp/CovidMain";
import { Presentation } from "./layout/blueprints/Presentation";
import LoginRoute, { Login } from "./layout/blueprints/Login";
import LoginPage from "./layout/components/LoginPage";
import DashboardRoute from "./layout/blueprints/Dashboard";
import { DashboardPage } from "./layout/components/DashboardPage";
import { MyResume } from "./layout/components/MyResume";

export const Routes = () => {
  const location = useLocation();
  console.log(location);

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99,
    },
    in: {
      opacity: 1,
      scale: 1,
    },
    out: {
      opacity: 0,
      scale: 1.01,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 2,
  };

  return (
    <AnimatePresence>
      <Switch>
        <Redirect exact from="/" to="/LandingPage" />
        <Route path={["/LandingPage", "/MyResume"]}>
          <Presentation>
            <Switch location={location} key={location.pathname}>
              <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                {/* <Route path="/Login" component={Login} /> */}
                <Route path="/LandingPage" component={LandingPage} />
                {/* <Route path="/MyResume" component={MyResume} /> */}
              </motion.div>
            </Switch>
          </Presentation>
        </Route>
        {/* <DashboardRoute path="/MyDashboard" component={DashboardPage} /> */}
        <Route path={["/MyDashboard", "/CovidTrackerApp", "/PomodoroApp", "/YoutubeApp", "/LandingPage"]}>
          <DashboardPage>
            <Switch location={location} key={location.pathname}>
              <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                <Route path="/MyDashboard" component={MyHomePage} />
                <Route path="/PomodoroApp" component={PomodoroApp} />
                <Route path="/YoutubeApp" component={YoutubeApp} />
                <Route path="/CovidTrackerApp" component={CovidTrackerApp} />
              </motion.div>
            </Switch>
          </DashboardPage>
        </Route>
      </Switch>
    </AnimatePresence>
  );
};
