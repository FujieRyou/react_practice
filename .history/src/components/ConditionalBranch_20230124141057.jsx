import { useState } from "react";

const animals = ["Dog","Cat","Rat"];
const ConditionalBranch = () =>{
    const [inputVal, setinputVal] = useState("")
    
    return(
        <div>
            <input type="text" className="inputValueFilter" value={inputVal} onChange={(e)=>{
                setinputVal(e.target.value)
            }} />
            <ul>
                {animals.map((animal)=> (<li key={animal}>{animal}</li>))
                        .filter((animal)=>(animal.indexOf(inputVal) !== -1))
                }
            </ul>
        </div>
    )
}

export default ConditionalBranch;