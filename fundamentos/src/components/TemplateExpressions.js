import Header from "./Header";

const TemplateExpressions = () =>{
    const name = 'Gustavo';
    const data  = {
        age : 31,
        job : 'Programador'
    }
    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Profissão: {data.job}</p>
            <Header/>
        </div>
    );
}

export default TemplateExpressions;