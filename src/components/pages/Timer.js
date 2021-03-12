import React, { useState, useEffect, useCallback } from "react";
import moment from "moment";

import Carousel from "./Carousel";
import dogSound from "../../sounds/mixkit-dog-barking-twice-1.wav";

const Timer = () => {
  const [counting, setCounting] = useState(false);
  const [firstClick, setFirstClick] = useState(false);
  const [overallTime, setOverallTime] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [audio] = useState(new Audio(dogSound));

  const calculateTotalSeconds = useCallback(() => {
    return hours * 3600 + minutes * 60 + seconds;
  }, [hours, minutes, seconds]);

  useEffect(() => {
    setOverallTime(calculateTotalSeconds());
  }, [calculateTotalSeconds]);

  useEffect(() => {
    let timerId;
    if (counting) {
      timerId = setInterval(() => {
        if (overallTime === 1) {
          setCounting(!counting);
          audio.play();
        }
        setOverallTime((prevCount) => (prevCount -= 1));
      }, 1000);
    }

    return () => clearInterval(timerId);
  });

  const displayTime = (time) => {
    return moment().hour(0).minute(0).second(time).format("HH : mm : ss");
  };

  const handleStart = () => {
    setCounting(!counting);
    setFirstClick(!firstClick);
  };

  const handleCancel = () => {
    setCounting(false);
    setFirstClick(false);
    setOverallTime(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div>
      {!counting && !firstClick ? (
        <Carousel
          setHours={setHours}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
        />
      ) : (
        <div>{displayTime(overallTime)}</div>
      )}
      <div className="button-container">
        {!counting && !firstClick ? (
          <button onClick={handleStart} disabled={overallTime === 0}>
            Start
          </button>
        ) : (
          <>
            <button onClick={() => setCounting(!counting)}>
              {!counting ? "Resume" : "Pause"}
            </button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Timer;
