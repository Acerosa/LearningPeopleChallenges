import React, { useState } from "react"


const StateDemo = () => {
    const [name, setName] = useState("Guest")
    const [age, setAge] = useState(0)
    const [happy, setIsHappy] = useState(false)

    const updateButton = () => {
        setName("Goodwill")
    }

    const increaseAge = () => {
        setAge(age + 1)
    }

    const toggleHappy = () => {
        setIsHappy(!happy)
    }

   return(
   <div>

    <p>Name: {name}</p>
    <button onClick={updateButton}>Change name</button>

   
    <p>Age: {age}</p>
    <button onClick={increaseAge}>Age increase</button>

    <p>Happy: {happy? "Yes" :"No"}</p>
    <button onClick={toggleHappy}>Happy</button>
    
    </div>
    
) 
}

export default StateDemo