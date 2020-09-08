import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useLocation, useHistory } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Spinner } from "react-bootstrap";
import YoutubeApp from "./features/YoutubeApp/YoutubeMain";
import { Presentation } from "./layout/blueprints/Presentation";
import { DashboardPage } from "./layout/components/DashboardPage";

const LandingPage = lazy(() => import("./layout/components/LandingPage"));
const MyHomePage = lazy(() => import("./features/Home/HomeMain"));
const CovidTrackerApp = lazy(() => import("./features/CovidTrackerApp/CovidMain"));
const PomodoroApp = lazy(() => import("./features/PomodoroApp/PomodoroMain"));

export const Routes = () => {
  const location = useLocation();
  // console.log(location);

  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8,
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 1.2,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1.5,
  };
  // const pageStyle = {
  //   position: "absolute",
  // };
  return (
    <AnimatePresence>
      <Suspense
        fallback={
          <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
            <Spinner animation="border" role="status" size="w-100 p-3" variant="primary">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        }
      >
        <Switch>
          <Redirect exact from="/" to="/LandingPage" />
          <Route path={["/LandingPage", "/MyResume"]}>
            <Presentation>
              <Switch location={location} key={location.pathname}>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
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
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Route path="/MyDashboard" component={MyHomePage} />
                  <Route path="/PomodoroApp" component={PomodoroApp} />
                  <Route path="/YoutubeApp" component={YoutubeApp} />
                  <Route path="/CovidTrackerApp" component={CovidTrackerApp} />
                </motion.div>
              </Switch>
            </DashboardPage>
          </Route>
        </Switch>
      </Suspense>
    </AnimatePresence>
  );
};
