import { useState } from "react";


const CondicionalRender = () => {

    const [x] = useState(true);

    const [name] = useState("Lucas");

    return (
    <div> 
        <h1>
            Isso será exibido ?
        </h1>
        { x && <p>Isso será exibido quando for true</p>}
        { !x && <p>Isso será exibido quando for false</p>}

        <h1>Condicionais</h1>
        {name === "Lucas" ? (<p>Olá,{name}</p>) : (<p>Nome não encontrado</p>) }

    </div>
    );
};

export default CondicionalRender;