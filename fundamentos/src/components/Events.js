const Events = () => {
    const handleMyEvent =(e) =>{
        window.alert('Deu Certo!');
    };

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clica aqui!</button>
            </div>
        </div>
    )
}

export default Events;