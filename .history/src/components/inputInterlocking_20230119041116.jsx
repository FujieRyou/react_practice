import { useState } from "react";

const InputInterlocking = () =>{
    let [nameVal,setNameVal] = useState()
    return(
        <div>
            <p>名前{}</p>
            <input type="text" onChange={(e)=>{
                console.log(e.target.value);
            }}/>

            <p>年齢{}</p>
            <input type="text" />
        </div>
    )
}

export default InputInterlocking