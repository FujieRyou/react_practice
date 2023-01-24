import { useState } from "react";

const animals = ["Dog","Cat","Rat"];
const ConditionalBranch = () =>{
    const [inputVal, setinputVal] = useState("")
    const initialVal = animals.indexOf(inputVal)
    
    return(
        <div>
            <input type="text" className="inputValueFilter" value={inputVal} onChange={(e)=>{
                setinputVal(e.target.value)
            }} />
            <ul>
                {animals.map((animal)=> (<li key={animal}>{animal}</li>))}
            </ul>
        </div>
    )
}

export default ConditionalBranch;