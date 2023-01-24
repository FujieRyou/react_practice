import { useState } from "react"

const CheckBox = () =>{

    const [checked , setChecked] = useState(true)
    const onCheck = (e) =>{
        console.log(e.target.value + "ok");
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