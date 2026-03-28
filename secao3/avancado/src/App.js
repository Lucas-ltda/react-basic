import logo from './logo.svg';
import './App.css';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import ListRender from './components/ListRender';
import CondicionalRender from './components/CondicionalRender';
import ManageData from './components/ManageData';

function App() {
  const userName  = "Lucas"
  
  const carBrand = "GM Group"
  const carKm = 1000
  const carColor = "Azul"

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
      <CarDetails brand = {carBrand} km = {carKm} color = {carColor}/>
    </div>
  </div>
    
  );
}

export default App;
