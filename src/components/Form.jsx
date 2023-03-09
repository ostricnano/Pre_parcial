import React from 'react'
import Card from './Card'
import './Form.css'

export default function Form({user,show, handleSubmit, handleChange, handleClick}) {
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <fieldset className='form'>
                <legend>Reserva tu turno</legend>
                <input 
                    type="text"
                    placeholder='Ingrese su nombre completo'
                    name='name'
                    value={user.name || ''}
                    onChange={handleChange}
                />
                <br/>
                <input 
                    type="text"
                    placeholder='Obra social'
                    name='obraSocial'
                    value={user.obraSocial || ''}
                    onChange={handleChange}
                />
                <br/>
                <input 
                    type="text"
                    placeholder='Email'
                    name='email'
                    value={user.email || ''}
                    onChange={handleChange}
                />
                <br/>
                <select 
                    name='medico'
                    value={user.medico || ''}
                    onChange={handleChange}
                >
                    <option value="">Seleccione una opcion</option>
                    <option value={user.medico}>Dermatologo</option>
                    <option value={user.medico}>Oculista</option>
                    <option value={user.medico}>Clinico</option>
                </select>
                <br/>
                <input 
                    type="date" 
                    name='date'
                    value={user.date || ''}
                    onChange={handleChange}
                />
                <br/>
                <button type='submit' >Enviar turno</button>
                <button  onClick={handleClick}>Reset Form</button>
            </fieldset>
        </form>
        
        {show&& <Card user={user}  />}
    
    </div>
  )
}
