import { useState } from "react"

const CheckBoxs = () =>{
    const [fruit, setFruit] = useState([
        {label:"Apple",value:100,checked:false},
        {label:"Banana",value:200,checked:false},
        {label:"Cherry",value:300,checked:false},
    ])

    const [sum ,setSum] = useState(0)

    const handleChange = (e) =>{
        const newFruits = fruit.map(fruit =>{
            const newFruit = {...fruit}
            if(newFruit.label === e.target.value){
                newFruit.checked = !fruit.checked
            }
            return newFruit
        })
        setFruit(newFruits)
    }

    return(
        <div>
            {
                fruit.map((fruit => {
                    return(
                        <div>
                            <input type="checkBox"
                            id={fruit.label}
                            value={fruit.label}
                            checked={fruit.checked}
                            onChange= {handleChange}
                            />
                            <label htmlFor={fruit.label}>
                                {fruit.label}:{fruit.value}
                            </label>
                        </div>
                    )
                }))
            }

            <div>合計:{sum}</div>
        </div>
    )
}

export default CheckBoxs