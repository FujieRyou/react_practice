import { useState } from "react"

const CheckBoxs = () =>{
    const [fruit, setFruit] = useState([
        {label:"Apple",value:100,checked:false},
        {label:"Banana",value:200,checked:false},
        {label:"Cherry",value:300,checked:false},
    ])

    const [sum ,setSum] = useState(0)

    return(
        <div>

            <div>合計:{sum}</div>
        </div>
    )
}

export default CheckBoxs