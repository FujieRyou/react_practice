const ChangeIvent = () =>{

    return(
        <div>
            <h3>コンソールを確認する</h3>
            <input type="text"
            onChange={() => console.log("onChange感知")}
            onBlur={()=>console.log("onBlur感知")}
            onFocus={()=> console.log("onFocus感知")}
            />
        </div>
    )
}

export default ChangeIvent
