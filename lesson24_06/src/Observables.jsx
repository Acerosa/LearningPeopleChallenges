import React from "react";
// RxJS is a library for reactive programming using Observables
import { fromEvent } from "rxjs";
// Operators help transform and control Observable streams
import { scan } from "rxjs/operators";

const Observables = () => {
  // setTimeout ensures the DOM elements are rendered before accessing them
  setTimeout(() => {
    const button = document.querySelector('#counterButton');
    const obText = document.querySelector('#obText');

    // Make sure the button and text element are found in the DOM
    if (button && obText) {
      //  Observable: emits a stream of click events
      const buttonClicks$ = fromEvent(button, 'click').pipe(
        // `scan` accumulates the number of clicks over time (acts like reduce)
        scan((count) => count + 1, 0)
      );

      //  Observer: subscribes to the stream and reacts to emitted values
      buttonClicks$.subscribe(count => {
        obText.textContent = `Number of clicks: ${count}`;
      });
    }
  }, 0);

  return (
    <>
      <h1>Observables</h1>
      <button id="counterButton">Click me!</button>
      <p id="obText">Number of clicks: 0</p>
    </>
  );
};

export default Observables;