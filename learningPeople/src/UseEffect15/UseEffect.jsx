import React, { useState, useEffect } from "react"

const Colours = () => {
  const [colour, setColour] = useState("red")
  const [speed, setSpeed] = useState(500000)

  useEffect(() => {
    const colours = ["red", "blue", "green", "orange", "purple"]
    let index = 0

    const interval = setInterval(() => {
      index = (index + 1) % colours.length
      setColour(colours[index])
    }, speed)

    return () => {
      clearInterval(interval)
    }
  }, [speed])

  return (
    <div className="use-effect-container">
      <h2>Colour Changing Box</h2>
      <div
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: colour,
          margin: "0 auto",
          borderRadius: "10px",
          transition: "background-color 0.5s ease"
        }}
      ></div>
      <label style={{ display: "block", textAlign: "center", marginTop: "20px" }}>
        Change speed (ms):
        <input
          type="range"
          min="200"
          max="2000"
          step="100"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          style={{ width: "100%", marginTop: "10px" }}
        />
        <div>{speed}ms</div>
      </label>
    </div>
  )
}

export default Colours
