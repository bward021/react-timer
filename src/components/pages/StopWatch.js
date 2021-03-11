import React, { useState, useEffect } from "react";
import moment from "moment";

const StopWatch = () => {
  const [counting, setCounting] = useState(false);
  const [firstClick, setFirstClick] = useState(false);
  const [counter, setCounter] = useState(0);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let timerId;
    if (counting) {
      timerId = setInterval(() => {
        setCounter((prevCount) => (prevCount += 10));
      }, 10);
    }

    return () => clearInterval(timerId);
  });

  const displayTime = () => {
    if (counter < 3600000) {
      return moment()
        .hour(0)
        .minute(0)
        .second(0)
        .millisecond(counter)
        .format("mm : ss . SS");
    } else {
      return moment()
        .hour(0)
        .minute(0)
        .second(0)
        .millisecond(counter)
        .format("HH : mm : ss . SS");
    }
  };

  const handleStart = () => {
    setCounting(!counting);
    setFirstClick(!firstClick);
  };

  const handleReset = () => {
    setCounter(0);
    setFirstClick(!firstClick);
    setLaps([]);
  };

  const displayLaps = () => {
    return laps.map((lap) => {
      return moment()
        .hour(0)
        .minute(0)
        .second(0)
        .millisecond(lap)
        .format("HH : mm : ss . SS");
    });
  };

  return (
    <div>
      <h1>StopWatch</h1>
      <h2>{displayTime()}</h2>
      <div className="button-container">
        {!counting && !firstClick ? (
          <button onClick={handleStart}>Start</button>
        ) : (
          <>
            <button onClick={() => setCounting(!counting)}>
              {!counting ? "Resume" : "Stop"}
            </button>
            {!counting ? (
              <button onClick={handleReset}>Reset</button>
            ) : (
              <button
                onClick={() => {
                  setLaps(laps.concat(counter));
                }}
              >
                Lap
              </button>
            )}
          </>
        )}
      </div>
      <hr />
      <h2> Laps: </h2>
      {displayLaps()}
    </div>
  );
};

export default StopWatch;

// need to know when the stopwatch is running
// state for MS
// state for SS
// state for MM
// Start button
// time that starts with MM:SS:MS
// When you click the start it shows a resume and lap button
// When you click the start it starts counting up
// Hitting stop pauses the counting
// Hitting stop turns the stop button to resume and turns the lap button to reset
// ## Hitting lap
