import { useState } from "react";
import style from "../scss/style.scss";

const animals = ["Dog","Cat","Rat"];
const ArrayFilter = () =>{
    const [filterVal,setFilterVal] = useState("");
    return(
        <div>
            <input type="text" className="inputValueFilter" value={filterVal} onChange={(e) =>{
                setFilterVal(e.target.value)
            }} />
            <ul>
                {animals.map((animal)=><li>{animal}</li>)}
            </ul>
        </div>
    )
}

export default ArrayFilter