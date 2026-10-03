import './App.css';
import ResortContainer from './Componente/ComponentforResorts';
import listings from './Data/data';

function App() {
  return (
    <>
      <h1>Resorts World:</h1>
      <ResortContainer data={listings}/>
    </>

);
}

export default App;
