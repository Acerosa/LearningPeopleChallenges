import React, { useState, useRef } from 'react';
import './index.css'

function StopWatch() {
  const [time, setTime] = useState(0); // time in milliseconds
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setTime(prev => prev + 10); // increment by 10ms
    }, 10); // run every 10ms
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setTime(0);
  };

  const formatTime = (time) => {
    const seconds = Math.floor(time / 1000);
    const milliseconds = time % 1000;
    return `${seconds}.${milliseconds.toString().padStart(3, '0')}s`;
  };




  return (
    <div className="stopwatch-container">
      <h2>Stopwatch</h2>
      <p className="stopwatch-display">{time} seconds</p>
      <div className="stopwatch-buttons">
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default StopWatch;
