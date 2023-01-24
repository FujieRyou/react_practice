import { useState } from "react"

const CheckBox = () =>{

    const [isChecked,setIsChecked] = useState(true)
    const toggleChecked = () =>{
        setIsChecked((prevState)=>{
            let state = !prevState
            return state
        })
    }

    return(
        <div>
            <label htmlFor="myCheck">チェック</label>
            <label htmlFor="">
                <input type="checkBox"
                id="myCheck"
                checked = {isChecked}
                onChange={()=>{toggleChecked()}}
                />
            </label>
            <h3>{isChecked ? "ON" : "OFF"}</h3>
        </div>
    )
}

export default CheckBox