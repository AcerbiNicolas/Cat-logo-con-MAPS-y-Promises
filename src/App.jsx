import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/Text/ItemListContainer';


function App() {

  return (
    <div className="App">

      <NavBar />
      
      <header className="App-header">
        <ItemListContainer msj="COMPRE Y VENDA CON CONFIANZA"/>
      </header>
    </div>
  );
}

export default App;
