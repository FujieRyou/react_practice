import { useState } from "react"

const CountUp = () =>{
    // ユーザの動きに合わせて変わる値のことをstateという。
    // useStateは値を保持、更新ができる
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);
    return(
        <div>
            <h2>カウントUPする</h2>
            <p>{count}</p>
            <button onClick={()=>{setCount(count+1)}}>UPボタン</button>
            <p>{count2}</p>
            <button onClick={()=>{setCount2(count2+1)}}>UPボタン</button>
        </div>
    )
}


export default CountUp;