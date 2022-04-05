import React from "react";
import "./time-panel.css";

const TimePanel = ({ duration, currentTime }) => {
  const secondsToMs = (seconds) => {
    if (!seconds) return "00m 00s";

    let duration = seconds;
    let hours = duration / 3600;
    duration = duration % 3600;

    let min = parseInt(duration / 60);
    duration = duration % 60;

    let sec = parseInt(duration);

    if (sec < 10) {
      sec = `0${sec}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }

    //in case there will be more than 1 hour
    if (parseInt(hours, 10) > 0) {
      return `${parseInt(hours, 10)}h ${min}m ${sec}s`;
    } else if (min === 0) {
      return `00m ${sec}s`;
    } else {
      return `${min}m ${sec}s`;
    }
  }

  return (
    <>
      <div className="control-panel">
        <div className="timer">
          <h3>{secondsToMs(currentTime)}</h3>
        </div>
        <div className="timer">
          <h3>{secondsToMs(duration)}</h3>
        </div>
      </div>
    </>
  );
};
export default TimePanel;
