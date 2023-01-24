import { useState } from "react";

const ConditionalBranch = ( animals ) =>{
    const [inputVal, setinputVal] = useState("")
    
    return(
        <div>
            <input type="text" className="inputValueFilter" value={inputVal} onChange={(e)=>{
                setinputVal(e.target.value)
            }} />
            <ul>
                {animals
                .filter(animal => animal.indexOf(inputVal) !== -1)
                .map((animal) =>{
                    // return <li key={animal}>{animal === "Dog" ? animal + "⭐︎":animal}</li>
                    return <li key={animal}>{animal}{animal === "Dog" && "⭐︎"}</li>
                })
                }
            </ul>
        </div>
    )
}

export default ConditionalBranch;