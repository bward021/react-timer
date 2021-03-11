import React, { useState, useEffect } from "react";
import moment from "moment";

const StopWatch = () => {
  const [counting, setCounting] = useState(false);
  const [firstClick, setFirstClick] = useState(false);
  const [counter, setCounter] = useState(0);
  const [lapTime, setLapTime] = useState(0);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let timerId;
    if (counting) {
      timerId = setInterval(() => {
        setCounter((prevCount) => (prevCount += 10));
        setLapTime((prevLapTime) => (prevLapTime += 10));
      }, 10);
    }

    return () => clearInterval(timerId);
  });

  const displayTime = (time) => {
    if (time < 3600000) {
      return moment()
        .hour(0)
        .minute(0)
        .second(0)
        .millisecond(time)
        .format("mm : ss . SS");
    } else {
      return moment()
        .hour(0)
        .minute(0)
        .second(0)
        .millisecond(time)
        .format("HH : mm : ss . SS");
    }
  };

  const handleStart = () => {
    setCounting(!counting);
    setFirstClick(!firstClick);
  };

  const handleReset = () => {
    setCounting(false);
    setFirstClick(false);
    setCounter(0);
    setLapTime(0);
    setLaps([]);
  };

  const handleLaps = () => {
    setLaps([{ counter, lapTime, lap: laps.length }, ...laps]);
    setLapTime(0);
  };

  const displayLaps = () => {
    return laps.map((item, idx) => {
      const { lap, counter, lapTime } = item;
      return (
        <div key={idx} className="single-lap">
          <div>{lap + 1}</div>
          <div>{displayTime(lapTime)}</div>
          <div>{displayTime(counter)}</div>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>StopWatch</h1>
      <h2>{displayTime(counter)}</h2>
      {laps.length >= 1 && <div>{displayTime(lapTime)}</div>}
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
              <button onClick={handleLaps}>Lap</button>
            )}
          </>
        )}
      </div>
      <hr />
      {laps.length >= 1 && (
        <>
          <h2> Laps: </h2>
          {displayLaps()}
        </>
      )}
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
