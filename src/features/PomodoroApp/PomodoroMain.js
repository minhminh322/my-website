import React, { Fragment } from "react";
import { Row, Col, CardBody, Card, CardHeader } from "reactstrap";
import Timer from "./components/Timer";

const PomodoroApp = () => (
  <Fragment>
    {/* <div className="app-main"> */}
    <Timer />
    {/* </div> */}
  </Fragment>
);

export default PomodoroApp;
