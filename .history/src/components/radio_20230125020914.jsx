const radio = () =>{
    return(
        <div>
            <label>
                <input type="radio" 
                value="Apple"
                checked = {fruit === "Apple"}
                />
                Apple
            </label>
            <label>
                <input type="radio" 
                value="Banana"
                checked = {fruit === "Banana"}
                />
            </label>
            <label>
                <input type="radio" 
                value="Cherry"
                checked = {fruit === "Cherry"}
                />
            </label>
        </div>
    )
}