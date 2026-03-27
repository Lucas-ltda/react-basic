import logo from './logo.svg';
import Events from './components/Events';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import Header from './components/Header';
import Body from './components/Body';
import TemplateExpressions from './components/TemplateExpressions';
import './App.css';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className='App'>
      <Challenge/>
      <Events/>
      <Header />
      <SecondComponent />
      <Body />
      <TemplateExpressions />
    </div>
  );
}

export default App;
