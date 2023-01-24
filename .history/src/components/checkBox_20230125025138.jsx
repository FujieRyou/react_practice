import { useState } from "react"

const CheckBox = () =>{

    const [isChecked,setIsChecked] = useState(true)
    const toggleChecked = (e) =>{
        setIsChecked((prevState)=>{
            let state = !prevState
        })
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