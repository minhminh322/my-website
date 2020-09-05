import React from "react";
import "../../../assets/components/Pomodoro/_base.scss";

const CountdownTimer = ({ currentTime, currentSession }) => {
  if (currentTime != null && currentSession != null) {
    return (
      <div className="timer-frame">
        <div className="timer-ring">
          <label id="timer-label">{currentSession}</label>
          <div id="timer-digit-label">
            {currentTime.minutes === 0 && currentTime.seconds === 0 ? (
              <label>Time is Up</label>
            ) : (
              <label>
                {currentTime.minutes < 10 ? `0${currentTime.minutes}` : currentTime.minutes}:
                {currentTime.seconds < 10 ? `0${currentTime.seconds}` : currentTime.seconds}
              </label>
            )}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default CountdownTimer;
