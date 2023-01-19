import { useState } from "react"

const SwitchFlag = () =>{
    const [onOff,setOnOff] = useState(flg(true))
    function flg(btn){
        return (btn ? "ON" : "OFF")
    }
    return(
        <div>
            <h2>電源{onOff}</h2>
            <button onClick={()=>{setOnOff(flg(true))}}>ON</button>
            <button onClick={()=>{setOnOff(flg(false))}}>OFF</button>
        </div>
    )
}

export default SwitchFlag