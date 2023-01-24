import { useState } from "react"

const CheckBox = () =>{

    const [isChecked,setIsChecked] = useState(true)
    const toggleChecked = (e) =>{
        console.log(e);
    }

    return(
        <div>
            <label htmlFor="myCheck">チェック</label>
            <label htmlFor="">
                <input type="checkBox"
                id="myCheck"
                onChange={(e)=>{toggleChecked(e)}}
                />
            </label>
            <h3></h3>
        </div>
    )
}

export default CheckBox