
const CarDetails = ({brand,km,color, newCar}) =>{
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
                <li>
                    Carro novo : {newCar ? "Sim" : "Não"}
                </li>
            </ul>
        </div>)
}

export default CarDetails;
