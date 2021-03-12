# React Timer

- Make a timer similar to https://break-mobile-timer.netlify.app/ or the android built in clock functionality.

## Persistant Data Todo:

- We want the ability to switch between timers and have them continue counting.

### Stopwatch Todos:

- laptimes

  - show red for the longest lap time
  - show blue for the shortest lap time

- Style the buttons

### Timer Todos:

- Add a bank of sounds to choose from
- Add countdown circle animation

## Audio Tag useRef:

```javascript
import React, { useRef } from "react";

const Timer = () => {
  const audioRef = useRef(null);

  const handleStart = () => {
    audioRef.current.play();
  };

  return (
    <div>
      <button onClick={handleStart}>Start</button>
      <audio
        ref={audioRef}
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </div>
  );
};

export default Timer;
```

## Resources

- We got the idea for moment from the following page: http://jsfiddle.net/LaAzg/154/
- You can download free sounds from https://mixkit.co/free-sound-effects/
- padStart is cool but we didn't need it anymore. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

```javascript
number.toString().padStart(2, "0");
```
