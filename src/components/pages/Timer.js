import React, { useState } from "react";
import Carousel from "./Carousel";

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  return (
    <Carousel
      setHours={setHours}
      setMinutes={setMinutes}
      setSeconds={setSeconds}
    />
  );
};

export default Timer;
