import React from 'react'
import { Link } from 'react-router-dom'
import './css/Opciones.css'

const Opciones = () => {
  return (
    <div className="buttons-container">
      <Link to="/poke_api" className="button">Poké API</Link>
      <Link to="/cargar_db" className="button">Cargar DB</Link>
      <Link to="/consulta_sql" className="button">Consulta SQL</Link>
    </div>
  )
}

export default Opciones