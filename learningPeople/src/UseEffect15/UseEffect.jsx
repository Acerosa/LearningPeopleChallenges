import React, { useState, useEffect } from "react"

const Colours = () => {
  const [colour, setColour] = useState("red")
  const [speed, setSpeed] = useState(1000)

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
    </div>
  )
}

export default Colours
