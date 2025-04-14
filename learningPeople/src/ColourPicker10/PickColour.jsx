import { useState } from "react"

const PickColour = () => {
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)

  const rgbString = `rgb(${red}, ${green}, ${blue})`

  return (
    <div className="pickColour">
      <h1>Pick RGB Colour</h1>

      <div className="displayColour" style={{ backgroundColor: rgbString }}>
        <p>Selected colour: {rgbString}</p>
      </div>

      <div>
        <label>Red: </label>
        <input type="range" min="0" max="255" value={red} onChange={(e) => setRed(Number(e.target.value))} />
        <input type="number" min="0" max="255" value={red} onChange={(e) => setRed(Number(e.target.value))} />
      </div>

      <div>
        <label>Green: </label>
        <input type="range" min="0" max="255" value={green} onChange={(e) => setGreen(Number(e.target.value))} />
        <input type="number" min="0" max="255" value={green} onChange={(e) => setGreen(Number(e.target.value))} />
      </div>

      <div>
        <label>Blue: </label>
        <input type="range" min="0" max="255" value={blue} onChange={(e) => setBlue(Number(e.target.value))} />
        <input type="number" min="0" max="255" value={blue} onChange={(e) => setBlue(Number(e.target.value))} />
      </div>
    </div>
  )
}

export default PickColour