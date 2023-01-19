import { useState } from "react";
import style from "../scss/style.scss"

const InputInterlocking = () =>{
    let [nameVal,setNameVal] = useState()
    return(
        <div>
            <p>名前{nameVal}</p>
            <input type="text" onChange={(e)=>{
                setNameVal(e.target.value)
            }}/>

            <p>年齢{}</p>
            <input type="text" />
            <button type="button" className="additionBtn">+</button>
            <button type="button" className="additionBtn">-</button>
        </div>
    )
}

export default InputInterlocking