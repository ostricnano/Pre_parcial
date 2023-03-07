import React from 'react'
import './card.css';

export default function Card({ user }) {

  const date = new Date();
  const day = date.getDate() +1;
  const month = date.getMonth()+1;

  return (
    
    <div className='card'>
      <h3>Datos del turno</h3>
      <p>Nombre: {user.name}</p>
      <p>Obra Social: {user.obraSocial}</p>
      <p>Email: {user.email}</p>
      <p>Medico: {user.medico}</p>
      <p>Fecha: {user.date}</p>
    </div>
   
  )
}

