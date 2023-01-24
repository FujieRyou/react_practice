import { useState } from "react"

const ShuffleNumArray = () =>{
    const numArray = [1,2,3,4,5]
    const [num ,setNum] = useState(numArray)
    console.log(num);
    const shuffle = () =>{
        const newNums = [...num];
        const value = newNums.pop();
        newNums.unshift(value)
        setNum(newNums)
    }
    return(
        <div>
            <h2>{num}</h2>
            <button type="button" onClick={shuffle}>シャッフル</button>
        </div>
    )
}

export default ShuffleNumArray