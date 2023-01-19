import { useState } from "react";

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
            <button type="button">+</button>
            <button type="button">-</button>
        </div>
    )
}

export default InputInterlocking