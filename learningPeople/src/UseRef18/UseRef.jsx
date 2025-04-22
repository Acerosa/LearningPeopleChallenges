import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const inputRef = useRef(null);
  const [changeColour, setColour] = useState("white");

  useEffect(() => {
    console.log("COMPONENT RENDERED");
  }, [changeColour, inputRef]);

  const handleClickRef = (() =>  {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "yellow";
  })

  function handleClickState() {
    setColour(prev => prev === "green" ? "lightgray" : "green");
  }

  return (
    <div>
      <button onClick={handleClickRef}>
        Click use ref!
      </button>
      <div
        ref={inputRef}
        tabIndex={0}
        style={{ padding: "10px", border: "1px solid black", marginBottom: "10px" }}
      >
        Use Ref div!
      </div>

      <button onClick={handleClickState}>
        Click use state!
      </button>
      <div
        style={{ padding: "10px", border: "1px solid black", backgroundColor: changeColour }}
      >
        Use State div!
      </div>
    </div>
  );
}

export default MyComponent;