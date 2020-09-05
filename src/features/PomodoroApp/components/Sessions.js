import React from "react";
// import "../../../assets/features/TimerApp/_base.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "reactstrap";

const Sessions = ({ handlePomodoro, handleShort, handleLong }) => {
  return (
    <div className="session-bar">
      <Button className="m-1" outline color="danger" onClick={handlePomodoro}>
        Pomodoro
      </Button>
      <Button className="m-1" outline color="success" onClick={handleShort}>
        Short Break
      </Button>
      <Button className="m-1" outline color="info" onClick={handleLong}>
        Long Break
      </Button>
    </div>
  );
};

export default Sessions;
