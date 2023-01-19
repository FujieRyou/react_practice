import style from "../scss/style.scss";

const PropsPractice = (props) =>{
    return(
        <div className={`component ${props.color}`}>
            <h3>Hello component</h3>
            <h3>{props.num}</h3>
        </div>
    )
}

export default PropsPractice;