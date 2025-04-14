import { element } from "prop-types";
import React, {useState} from "react";
import "./index.css"

const ProgrammingLanguages = () => {

    const [languages, setLangs] = useState(["Python", "JavaScript", "Swift"])

    const handleAddLanguage = ()=> {
        const newLang = document.getElementById("langInput").value;
        document.getElementById("langInput").value = ""

        setLangs(l => [...l, newLang])
    }


    const handleRemoveLanguage = (index)=> {

        setLangs(languages.filter((_, i) => i !== index))
    }

    return(<>
    <h2>List of Languages</h2>
    <ul>
        {languages.map((lang, index) => <li 
        key={index} onClick={() => handleRemoveLanguage(index)}>
            {lang}
            </li>)}
        <input type="text" id="langInput" placeholder="Enter a language" />
        <button onClick={handleAddLanguage}>Add a language</button>
    </ul>
    </>)

}

export default ProgrammingLanguages