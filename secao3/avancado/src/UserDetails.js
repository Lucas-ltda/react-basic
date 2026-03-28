
const UserDetails = ({id , name , age}) =>{
    return(
        <div>
            <h2>Olá N° {id} - {name}!</h2>
            <p>
                Você tem {age} anos, logo você { age >=18 ? "pode dirigir. Que legal!" : "não pode dirigir. Uma pena!" }
            </p>
        </div>
    )
}


export default UserDetails;