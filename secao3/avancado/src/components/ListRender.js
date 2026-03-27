import { useState } from "react"

const ListRender = () => {

    const [users] = useState([
        { id: 1, nome: "Lucas", descrição: "Desenvolvedor React" },
        { id: 2, nome: "Maria", descrição: "Designer UX/UI" },
        { id: 3, nome: "João", descrição: "Engenheiro Backend" },
        { id: 4, nome: "Ana", descrição: "Product Manager" }
    ])
    

    return(
        <div>
            <ul>
            {/* react pede indices para poder exceutar listas sem problemas no console  */}
                {users.map((user) => (
                    <li key = {user.id}>{user.nome} - {user.descrição}</li>
                ) )}
            </ul>
        </div>
    )
}


export default ListRender