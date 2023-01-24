import { useState } from "react"

const Radio = () =>{
    const [fruit, setFruit] = useState("Apple")
    const onChange = (e) => setFruit(e.target.value)

    return(
        <div>
            <label>
                <input type="radio" 
                value="Apple"
                checked = {fruit === "Apple"}
                onChange = {onChange}
                />
                Apple
            </label>
            <label>
                <input type="radio" 
                value="Banana"
                checked = {fruit === "Banana"}
                onChange = {onChange}
                />
                Banana
            </label>
            <label>
                <input type="radio" 
                value="Cherry"
                checked = {fruit === "Cherry"}
                onChange = {onChange}
                />
                Cherry
            </label>

            <h3>私は{fruit}が食べたい</h3>
        </div>
    )
}

export default Radio