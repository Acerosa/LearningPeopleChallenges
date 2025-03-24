import { useState } from "react";



const Counter = ()=> {

    const [count, setCount] = useState(0)

    const increase = ()=>{
            setCount(count+1)
    }

    const decrease = ()=>{
        setCount(count-1)
    }
        const reset = ()=>{
            setCount(0)
        }

    return (
    <div className="counter-container">
        <p className="count-display"> {count} </p>
    <button className="count-bt" onClick={increase}>Add</button>
    <button className="count-bt" onClick={decrease}>Remove</button>
    <button className="count-bt" onClick={reset}>Clear</button>
    </div>)
   
}



export default Counter