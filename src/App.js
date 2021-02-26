import './App.css';
import Conversor from './components/Conversor';

function App() {

  const moedas = [
    "BRL", 
    "USD",
    "EUR"
  ];

  return (
    <div className="App vertical-center">
      <div className="container pb-4 pt-4 mt-4 mb-4">
        <h1 className="title text-center text-uppercase">Conversor de moedas</h1>
        <div className="row mt-5">
          <div className="col"><Conversor moedaA={moedas} moedaB={moedas}></Conversor></div>
        </div>
      </div>
    </div>
  );
}

export default App;
