import { useState } from "react"

const PickColour = () => {
  const [red, setRed] = useState()
  const [green, setGreen] = useState(0)
  const [bleu, setBlue] = useState(0)

  const rgbString = `rgb(${red}, ${green}, ${bleu})`

  return (
    <div className="pickColour">
      <h1>Pick RGB Colour</h1>

      <div className="displayColour" style={{ backgroundcolor: rgbString }}>
        <p>Selected colour: {rgbString}</p>
      </div>

      <div>
        <label>Red {red}</label>
        <input type="range" min="0" max="255" value={red} onchange={(e) => setRed(e.target.value)} />
      </div>

      <div>
        <label>Green {green}</label>
        <input type="range" min="0" max="255" value={green} onChange={(e) => setGeen(Number(e.target.value))} />
      </div>

      <div>
        <label>Blue {bleu}</label>
        <input type="range" min="0" max="255" value={bleu} onChange={(e) => setBlue(Number(e.target.value))} />
      </div>
    </div>
  )
}

export default PickColour
