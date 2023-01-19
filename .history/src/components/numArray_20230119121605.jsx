import { useState } from "react"

const NumArray = () =>{
    const numArray = [1,2,3,4,5]
    const [num ,setNum] = useState(numArray)
    console.log(num);
    return(
        <div>
            
        </div>
    )
}

export default NumArray