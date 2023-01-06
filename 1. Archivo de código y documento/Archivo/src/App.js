import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import PokePage from './pages/PokePage';
import CargarDB from './pages/CargarDB';
import Inicio from './pages/Inicio';
import Consultas from './pages/Consultas';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Inicio />
        <Routes>
          <Route path="/poke_api" element={<PokePage />} />
          <Route path="/cargar_db" element={<CargarDB />} />
          <Route path="/consulta_sql" element={<Consultas />} />
          {/*<PokePage />*/}
          {/*<CargarDB />*/}
        </Routes>
      </Router>
      </header>
    </div>
  );
}

export default App;
