import style from "../scss/style.scss"
import { useState } from "react";

const Todolist = () =>{
    const [val, setVal] = useState();
    
    return(
        <div className="todoWrap">
            <h2>todoリスト※作成途中</h2>
            <input type="text" id="txtArea" className="txtArea" />
            <button type="button" id="addBtn" className="addBtn">追加</button>
            <div id="listWrap">
            </div>
        </div>
    )
}

export default Todolist;