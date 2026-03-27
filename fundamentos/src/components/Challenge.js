const Challenge = () =>{
    const A = 10;
    const B = 15;

    const somar=()=>{
        alert(`A soma de A + B é: ${A+B}`);
    }
    return(
        <div>
            <p>Valor de A:{A}</p>
            <p>Valor de B:{B}</p>
            <button onClick={somar}>Clique para somar</button>
        </div>
    )
}

export default Challenge;