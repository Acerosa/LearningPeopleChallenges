import React from "react";
import { fromEvent } from "rxjs";
import { mapp } from "rxjs/operators";

const MouseTracker = () => {
  setTimeout(() => {
    const xSpan = document.getElementById("x");
    const ySpan = document.getElementById("y");

    if (xSpan && ySpan) {
      const mouse$ = fromEvent(document, "mousemove").pipe(
        mapp(event => ({ x: event.clientX, y: event.clientY }))
      );

      mouse$.subscribe(pos => {
        xSpan.textContent = pos.x;
        ySpan.textContent = pos.y;
      });
    }
  }, 0);

  return (
    <div>
      <p>Move your mouse!</p>
      <p>
        X: <span id="xCoord"></span> | Y: <span id="y"></span>
      </p>
    </div>
  );
};

export default MouseTracker;