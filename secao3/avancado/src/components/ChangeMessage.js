

const ChangeMessageState = ( {handleMessage}) =>{
   
    const messages = ["Oi, bão?", "Oi, tudo bem?", "oi tudo bem nada"]
    
    return(
        <div>
            <button onClick={() => handleMessage(messages[0]) }>Messagem N° 1 !</button>
            <button onClick={() => handleMessage(messages[1])}>Messagem N° 2 !</button>
            <button onClick={() => handleMessage(messages[2])}>Messagem N° 3 !</button>
        </div>
    )
}

export default ChangeMessageState;