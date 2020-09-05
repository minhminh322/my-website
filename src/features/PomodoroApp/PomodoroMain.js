import React, { Fragment } from "react";
import { Row, Col, CardBody, Card, CardHeader } from "reactstrap";
import Timer from "./components/Timer";

const PomodoroApp = () => (
  <Fragment>
    <Card className="app-main">
      <CardHeader>
        <div className="card-header--title font-size-lg font-weight-bold py-2">Pomodoro Timer</div>
      </CardHeader>
      <CardBody>
        <div>
          <Timer />
        </div>
      </CardBody>
    </Card>
  </Fragment>
);

export default PomodoroApp;
