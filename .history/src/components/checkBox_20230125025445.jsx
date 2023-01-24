import { useState } from "react"

const CheckBox = () =>{

    const [isChecked,setIsChecked] = useState(true)
    const toggleChecked = () =>{
        setIsChecked((prevState)=>{
            console.log(prevState);
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
                onChange={()=>{toggleChecked()}}
                />
            </label>
            <h3></h3>
        </div>
    )
}

export default CheckBox