const changeIvent = () =>{

    return(
        <div>
            <h3>コンソールを確認する</h3>

            <input type="text" onChange={() => console.log("onChange感知")}/>
        </div>
    )
}

export default changeIvent
