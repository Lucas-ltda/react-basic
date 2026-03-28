import logo from './logo.svg';
import './App.css';

import ShowUserName from './components/ShowUserName';
import ExecuteFunction from './components/ExecuteFunction';
import UserDetails from './UserDetails';
import CarDetails from './components/CarDetails';
import ListRender from './components/ListRender';
import CondicionalRender from './components/CondicionalRender';
import ChangeMessageState from './components/ChangeMessage';
import ManageData from './components/ManageData';
import Message from './components/Message';
import { useState } from 'react';

function App() {
  const userName  = "Lucas"
  
  // crie um array de objetos com os detalhes de carros com id
  const cars = [
    { id: 1, brand: "Ferrai", km: 10000, color: "Vermelho", newCar: false },
    { id: 2, brand: "Porche", km: 0, color: "Azul", newCar: true },
    { id: 3, brand: "Lamborghini", km: 5000, color: "Prata", newCar: false }
  ];

  function eventClick(){
    window.alert("Evento do componente pai sendo executado")
  }

  const [message, setMessage] = useState(" ");
  
  const handleMessage = (msg) =>{
    setMessage(msg);
  }



  const people = [
    { id: 1, name: "Lucas", age: 25 },
    { id: 2, name: "Maria", age: 30 },
    { id: 3, name: "João", age: 16 }
  ];
  
  return (
    <div className="App">
    <h3>
      Avançando em React - Seção 3
    </h3>
    <p>Imagens</p>

    <div>
    {/* ex de imagen com tag img */}
      <img src="/logo192.png" alt="React Logo"/>
    </div>

    <div>
      {/* ex de imagen com importação */} 
      <img src={logo} alt='Logo'/>
    </div>

    <div>
      <ManageData/>
    </div>

    <div>
      <ListRender/>
    </div>

    <div>
      <CondicionalRender />
    </div>
    <div>
      <ShowUserName name = {userName}/>
    </div>
    <div>
      <CarDetails brand = "GmGroup" km = {10000} color = "Azul" newCar ={false} />
      <CarDetails brand = "VW" km = {0} color = "Vermelho" newCar ={true} />
      <CarDetails brand = "Toyota" km = {5000} color = "Prata" newCar ={false} />
    </div>
    {/* loop de array de objetos  */}
    <div>
      <h2>Loop de array com objetos</h2>
      {
        cars.map((car) =>(
          <CarDetails 
          key = {car.id}
          brand = {car.brand}
          km = {car.km} 
          color = {car.color} 
          newCar={car.km} />
        ))
      }
    </div>
    <ExecuteFunction myFunction = {eventClick} />
      
    {/* state lifit */}
    <Message msg={message}/>

    <ChangeMessageState handleMessage={handleMessage}/>

    <h2>Atividade da udemy</h2>
      
      <div>

      {people.map((person)=> 
        <UserDetails
          id = {person.id}
          name = {person.name}
          age = {person.age}
        />)}

    
      </div>

  </div>
    
  );
}

export default App;
