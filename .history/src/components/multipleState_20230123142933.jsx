import { useState } from "react"

const ToggleNum = () =>{
    const [count,setCount] = useState(0)
    const countUp = () =>{

    }
    return(
        <div>
            <h2>{count}</h2>
            <button type="button" onClick={()=>{setCount(count+1)}}>+</button>
            <button type="button" onClick={()=>{setCount(count-1)}}>-</button>
        </div>
    )
}

export default ToggleNum;