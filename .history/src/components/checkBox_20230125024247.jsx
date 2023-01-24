import { useState } from "react"

const CheckBox = () =>{

    const [checked , setChecked] = useState(false)
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
        </div>
    )
}

export default CheckBox