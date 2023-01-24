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
                {animals
                .filter(animal => animal.indexOf(inputVal))
                .map(animal => <li>{animal}</li>)
                }
            </ul>
        </div>
    )
}

export default ConditionalBranch;