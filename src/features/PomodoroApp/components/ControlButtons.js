import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "reactstrap";

const ControlButtons = ({ isStart, handleStartClick }) => {
  return (
    <div className="start-button">
      <Button size="lg" color="primary" onClick={handleStartClick}>
        <span>
          <FontAwesomeIcon icon={["far", "clock"]} />
        </span>
        <span className="start-label">{isStart ? "Stop" : "Start"}</span>
      </Button>
    </div>
  );
};

export default ControlButtons;
