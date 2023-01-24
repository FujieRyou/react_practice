import { useState } from "react"

const CheckBoxs = () =>{
    const [fruit, setFruit] = useState([
        {label:"Apple",value:100,checked:false},
        {label:"Banana",value:200,checked:false},
        {label:"Cherry",value:300,checked:false},
    ])
    return(
        <div>

        </div>
    )
}

export default CheckBoxs