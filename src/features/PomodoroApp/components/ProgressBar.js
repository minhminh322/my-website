import React, { Fragment } from "react";

import { Progress } from "reactstrap";
import "../../../assets/components/Pomodoro/_base.scss";

const ProgressBar = ({ currentProgress }) => {
  const { completed, totalProgress } = currentProgress;
  return (
    <Fragment>
      <Progress
        value={String(completed * 10 + 0.1)}
        max={String(totalProgress * 10)}
        striped
        animated
        className="progress-bar-rounded progress-animated-alt mb-4"
        color="danger"
      >
        {String(completed * 10) + "%"}
      </Progress>
    </Fragment>
  );
};

export default ProgressBar;
