import { useState } from "react";

const ManageData = ()=> {
    // use de states 

    const [number,setNumber] = useState(10)

    return(
        <div>
            <h3>Uso de States com math random</h3>
            <p>Valor: {number}</p>
            <button onClick={()=>{setNumber(Math.random())}}>Mudar o State!</button>
        </div>
    )
}

export default ManageData;