import { useState } from "react";
import style from "../scss/style.scss"

const InputInterlocking = () =>{
    let [nameVal,setNameVal] = useState()
    let [age,setAge] = useState(0)
    return(
        <div>
            <p>名前{nameVal}</p>
            <input type="text" onChange={(e)=>{
                setNameVal(e.target.value)
            }}/>

            <p>年齢{}</p>
            <input type="text" value={age}/>
            <button type="button" className="additionBtn" onClick={()=>{
                
            }}>+</button>
            <button type="button" className="additionBtn">-</button>
        </div>
    )
}

export default InputInterlocking