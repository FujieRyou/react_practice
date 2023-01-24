import { useState } from "react"

const ToggleNum = () =>{
    const [count,setCount] = useState(0)
    const countUp = () =>{

    }
    return(
        <div>
            <h2>{count}</h2>
        </div>
    )
}

export default ToggleNum;