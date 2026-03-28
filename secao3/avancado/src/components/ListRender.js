import { useState } from "react"

const ListRender = () => {

    const [users,setUsers] = useState([
        { id: 1, nome: "Lucas", descrição: "Desenvolvedor React" },
        { id: 2, nome: "Maria", descrição: "Designer UX/UI" },
        { id: 3, nome: "João", descrição: "Engenheiro Backend" },
        { id: 4, nome: "Ana", descrição: "Product Manager" }
    ])

    
    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * users.length)+1;

        setUsers((prevUsers) => {
            return  prevUsers.filter((user) => randomNumber !== user.id)
        });
    }
 
    return(
        <div>
            <ul>
            {/* react pede indices para poder exceutar listas sem problemas no console  */}
                {users.map((user) => (
                    <li key = {user.id}>{user.nome} - {user.descrição}</li>
                ) )}
            </ul>

            <button onClick={deleteRandom}>
                Clique Aqui Bonitinho!
            </button>
        </div>
    )
}


export default ListRender