import React, { useState } from 'react';
import './css/ConsultaSQL.css'

const ConsultaSQL = () => {
    const [consulta, setConsulta] = useState('SELECT * FROM poke_db_pokemon WHERE tipo LIKE "%,%" OR tipo LIKE "% %";');
    const [resultado, setResultado] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const consultaSQL = {
        consulta: consulta,
      };
  
      const response = await fetch(`http://127.0.0.1:8000/api/poke_db/consulta-sql?consulta=${encodeURIComponent(consulta)}`, {
        method: 'POST',
        body: JSON.stringify(consultaSQL),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
      setResultado(data.resultado);
    };

  return (
    <div className="form-container">
      <h1>Generar una consulta SQL</h1>

      <h2 className='tarea-1'>Consulta que presente los pokemones que tienen más de dos tipos:</h2>
      <p className='tarea-1-sql'>SELECT * FROM poke_db_pokemon WHERE tipo LIKE "%,%" OR tipo LIKE "% %";</p>
      <h2 className='tarea-2'>Consulta con el tipo que más se repite:</h2>
      <p className='tarea-2-sql'>SELECT tipo, COUNT(*) as cantidad FROM poke_db_pokemon GROUP BY tipo ORDER BY cantidad DESC LIMIT 1;</p>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-section">
          <label className="form-label">Resultado</label>
          <textarea className="form-input" value={resultado} readOnly />
        </div>
        <div className="form-section">
          <label className="form-label">Consulta</label>
          <input className="form-input" type="text" value={consulta} onChange={e => setConsulta(e.target.value)} />
        </div>
        <button className="form-button" type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ConsultaSQL