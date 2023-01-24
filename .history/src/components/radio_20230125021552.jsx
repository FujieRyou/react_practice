import { useState } from "react"

const Radio = () =>{
    const [fruit, setfruit] = useState("Apple")
    const onChange = (e) => setfruit(e.taget.value)

    return(
        <div>
            <label>
                <input type="radio" 
                value="Apple"
                // checked = {fruit === "Apple"}
                />
                Apple
            </label>
            <label>
                <input type="radio" 
                value="Banana"
                // checked = {fruit === "Banana"}
                />
                Banana
            </label>
            <label>
                <input type="radio" 
                value="Cherry"
                // checked = {fruit === "Cherry"}
                />
                Cherry
            </label>

            <h3>私は{}</h3>
        </div>
    )
}

export default Radio