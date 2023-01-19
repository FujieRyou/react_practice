const Profile = ({name="Fujie",age=21,from="大阪"}) =>{
    return(
        <div>
            <h3>Name:{name}</h3>
            <h3>Age:{age}</h3>
            <h3>From:{from}</h3>
        </div>
    )
}

export default Profile