import style from "../scss/style.scss";

const animals = ["Dog","Cat","Rat"];
const ArrayFilter = () =>{

    return(
        <div>
            <input type="text" className="inputValueFilter" />
            <ul>
                {animals.map((animal)=>{
                    <li>{animal}</li>
                })}
            </ul>
        </div>
    )
}

export default ArrayFilter