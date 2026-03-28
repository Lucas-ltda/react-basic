
const CarDetails = ({brand,km,color}) =>{
    return(
        <div>
            <h2>
                Detalhes do Carro com props:
            </h2>
            <ul>
                <li>
                    Marca : {brand}
                </li>
                <li>
                    KMs Rodados: {km}
                </li>
                <li>
                    Cor: {color}
                </li>
            </ul>
        </div>)
}

export default CarDetails;
