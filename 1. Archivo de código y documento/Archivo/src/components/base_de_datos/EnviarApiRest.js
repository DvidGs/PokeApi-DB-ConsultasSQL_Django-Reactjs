import React, { useState ,useEffect } from 'react'
import { DataBaseHooks } from '../../hooks/DataBaseHooks'
import './css/EnviarApiRest.css'

const EnviarApiRest = () => {
  const { añadirPokemonInformacion } = DataBaseHooks()
  const [nombre, setNombre] = useState('')
  const [tipo, setTipo] = useState('')
  const [habilidades, setHabilidades] = useState('')
  const [estadisticas, setEstadisticas] = useState('')
  const [envioExitoso, setEnvioExitoso] = useState('')

  
  const handleSubmit = event => {
    event.preventDefault()
    // Aquí puedes enviar los datos al API REST usando añadirPokemonInformacion
    añadirPokemonInformacion({
      nombre: nombre,
      tipo: tipo,
      habilidades: habilidades,
      estadisticas: estadisticas,
    }).then(() => {
      setEnvioExitoso('Envío exitoso')
    })
  }
 


  return (
    <>
    <h1>Cargar la información en una Base de Datos</h1>
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-section">
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={event => setNombre(event.target.value)} />
      </div>
      <div className="form-section">
        <label>Tipo:</label>
        <input type="text" value={tipo} onChange={event => setTipo(event.target.value)} />
      </div>
      <div className="form-section">
        <label>Habilidades:</label>
        <input type="text" value={habilidades} onChange={event => setHabilidades(event.target.value)} />
      </div>
      <div className="form-section">
        <label>Estadísticas:</label>
        <input type="text" value={estadisticas} onChange={event => setEstadisticas(event.target.value)} />
      </div>
      <button id="submit-button" type="submit">Enviar</button>
      {envioExitoso && <p>{envioExitoso}</p>}
    </form>
    </>
  )
}

export default EnviarApiRest