# React Timer

- Make a timer similar to https://break-mobile-timer.netlify.app/ or the android built in clock functionality.

## Timer:

- Hours, Minutes, Seconds
  - Scrolling wheel to select time
  - You can also click the number above and below the current number to change
  - Click on number to manually add a time
- Start button
- After starting it adds a pause and cancel button and removes the start button
- After starting it adds the remaining time in the center of a circle.
  - That circle slowly winds down
  - The remaining time counts down

## StopWatch:

- Start button
- time that starts with with MM:SS:MS
- When you click the start it shows a resume and lap button
- When you click the start it starts counting up
- Hitting stop pauses the counting
- Hitting stop turns the stop button to resume and turns the lap button to reset
- ## Hitting lap

## Persistant Data

- We want the ability to switch between timers and have them continue counting.

## Old Stuff:

- padStart is cool but we didn't need it anymore. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

```javascript
number.toString().padStart(2, "0");
```

## Resources

- We got the idea for moment from the following page: http://jsfiddle.net/LaAzg/154/
