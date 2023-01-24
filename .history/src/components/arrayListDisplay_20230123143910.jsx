const animals = ["Dog","Cat","Rat"];
const ArrayDisplay = () =>{
    const animalList = []
    for(const animal of animals){
        animalList.push(<li>{animal}</li>)
    }
    return(
        <div>
            <h3>配列の操作</h3>
            <ul>
                {/* <li>{animals[0]}</li>
                <li>{animals[1]}</li>
                <li>{animals[2]}</li> */}
            </ul>
        </div>
    )
}

export default ArrayDisplay