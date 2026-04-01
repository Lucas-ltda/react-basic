
const MyForm = () =>{
    return(
        <div>
            <h1>Meu Formulario</h1>
            {/* criação de formulario */}
            <form>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type = "number" name="name" placeholder="Escreve ai pra tu vê um ngc"/>
                    <input type="submit" value = "Enviar!" />
                </div>
                {/* Formulario com label envovlendo input */}
                    <div>
                        <label htmlFor="email" name ="email" placeholder = "Digite seu email">Email:
                        <input type="email" id="email" name="email" placeholder="Digite seu email"/>
                        <input type="submit" value = "Enviar!" />
                        </label>
                    </div>

            </form>
        </div>
    )
}
export default MyForm;