import React, { useEffect, useState } from "react";

// Import RxJS functions and the scheduler we'll use
import { fromEvent, animationFrameScheduler } from "rxjs"
import { map, observeOn } from "rxjs/operators"

const MouseTrackerWithScheduler = () => {
  // React state to hold mouse coordinates
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Create an observable from the 'mousemove' event
    const mouseMove$ = fromEvent(document, "mousemove").pipe(

      // Transform the raw event into a cleaner { x, y } object
      map((event) => ({
        x: event.clientX,
        y: event.clientY,
      })),

      // Schedule state updates to happen just before the next browser repaint
      observeOn(animationFrameScheduler)
    )

    // Subscribe to the observable and update state on each emitted value
    const subscription = mouseMove$.subscribe(setCoords);

    // Cleanup function: unsubscribe when the component unmounts
    return () => subscription.unsubscribe();
  }, []); // Empty dependency array: this effect runs once on mount

  // Render the current mouse coordinates on screen
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Mouse Tracker (with Scheduler)</h2>
      <p>X: {coords.x} | Y: {coords.y}</p>
    </div>
  )
}

export default MouseTrackerWithScheduler