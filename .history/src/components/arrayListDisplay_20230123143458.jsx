const animals = ["Dog","Cat","Rat"];
const arrayDisplay = () =>{

    return(
        <div>
            <h3>配列の操作</h3>
            <ul>
                <li>{animals[0]}</li>
                <li>{animals[1]}</li>
                <li>{animals[2]}</li>
            </ul>
        </div>
    )
}