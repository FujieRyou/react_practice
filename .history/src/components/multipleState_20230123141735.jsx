import { useState } from "react"

const ToggleNum = () =>{
    const [countA,setCountA] = useState(0)
    const [countB,setCountB] = useState(0)
    let toggle = true
    const toggleBtn = () =>{
        toggle(prev => !prev);
        return (toggle ? countA : countB)
    }
    return(
        <div>
            <button type="button" onClick={toggleBtn}>toggle</button>
            <h2>{}</h2>

        </div>
    )
}

export default ToggleNum;