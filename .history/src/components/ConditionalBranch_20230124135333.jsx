import { useState } from "react";

const animals = ["Dog","Cat","Rat"];
const ConditionalBranch = () =>{
    const [inputVal, setinputVal] = useState("")
    return(
        <div>
            <input type="text" className="inputValueFilter" />
            <ul>
                <li ></li>
            </ul>
        </div>
    )
}

export default ConditionalBranch;