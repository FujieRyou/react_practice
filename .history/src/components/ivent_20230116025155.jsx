const ChangeIvent = () =>{

    return(
        <div>
            <h3>コンソールを確認する</h3>
            <input type="text"
            // onChange=>input内に入力されるたび感知
            onChange={() => console.log("onChange感知")}

            // onBlur=>focusが外れるたびに感知
            onBlur={(e)=>console.log(e.target.value)}

            // onFocus=>focusに感知
            onFocus={()=> console.log("onFocus感知")}
            />

            <div 
            onMouseEnter={()=> console.log("カーソルが入ってきました")}
            onMouseLeave={()=> console.log("カーソルがでました")}
            ></div>
        </div>
    )
}

export default ChangeIvent
