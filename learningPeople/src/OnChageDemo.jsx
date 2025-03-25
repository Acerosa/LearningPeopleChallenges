import { useState } from "react";

const OnChageDemo =()=> {
    const [name, setName] = useState()
    const [amunt, setAmout] = useState()
    const [comment, setComment] = useState()
    const [language, setLanguage] = useState()
    const [deploy, setDeployment] = useState("")

    const changeNameHandler = (event) =>{
        setName(event.target.value)
    }

    const changeAmoutHandler = (event) =>{
        setAmout(event.target.value)
    }

    const changeCommentHandler = (event) =>{
        setComment(event.target.value)
    }


    const changeLanguagetHandler = (event) =>{
        setDeployment(event.target.value)
    }


    const changeDeploymentHandler = (event) =>{
        setDeployment(event.target.value)
    }
    return (
        <>
        <input type="text" 
        value={name} 
         onChange={changeNameHandler}/>
        <p>
        Name: {name}
        </p>

        <input type="number"
        min={0}
        value={amunt} 
         onChange={changeAmoutHandler} />
        <p>
        The amount is: {amunt}
        </p>


        <textarea 
        name="" id="" 
        value={comment} onChange={changeCommentHandler} 
        placeholder="Please say what you think of react"
        />
        <p>Comment:  {comment}</p>


        <select name="" id="" value={language} onChange={changeLanguagetHandler}>
            <option value="">Select an option</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="C#">C#</option>
            <option value="Swift">Swift</option>
            <option value="Lua">Lua</option>
            <option value="C++">C++</option>
        </select>
        <p>The selected programming language is:  {language}</p>

        <label >Deploy
            <input type="radio" value="Deploy"
            checked={deploy === "Deploy"}
            onChange={changeDeploymentHandler}/>
        </label>
        <label >Do not Deploy
        <input type="radio" 
        value="Do not Deploy"
        checked={deploy === "Do not Deploy"} onChange={changeDeploymentHandler}/>
        </label>
        <p>Deployment: {deploy}</p>
        </>
    )
}
export default OnChageDemo
