import React from 'react'
import { Link } from 'react-router-dom'
import './FigHec.css'

export const FigHec = ( {httpId, id, name, fullName, birth, baseBio } ) => {

   return (
    <div className="estilosTarjeta">
      <div className="estilosTarjetaImagen">
        <img src={`https://i.ibb.co/${httpId}/${name}.jpg`} alt={name} className="imgFigHec" />
        <div className="estiloTexto">
          <h3>{fullName}</h3>
          <small style={{fontSize:'0.8rem'}}>{birth}</small>
          <p style={{fontSize:'0.9rem'}}>{baseBio}</p>
        </div>
      </div>
      <Link to={`./figuraHecho/${name}` } className="estilosBoton">
                Mas...
      </Link>
    </div>
  )
}