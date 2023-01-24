import { useState } from "react"

const CheckBox = () =>{

    const [checked , setChecked] = useState("OFF")
    const onCheck = () =>{
        
    }
    return(
        <div>
            <label htmlFor="myCheck">チェック</label>
            <label htmlFor="">
                <input type="checkBox"
                id="myCheck"
                onChange={onCheck}
                />
            </label>
            <h3>{checked}</h3>
        </div>
    )
}

export default CheckBox