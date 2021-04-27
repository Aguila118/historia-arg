import React, { useMemo } from 'react'
import { useParams } from 'react-router'
import { getFigHecByName } from '../selectors/getFigHecByname';
import './FigHecScreen.css'


export const FigHecScreen = ({history}) => {

  
  const {name} = useParams();

  const names = useMemo(() => getFigHecByName(name), [ name ])
  const {httpId, id, fullName, bio, bio2, bio3, bio4} = names

  const handleClick = () => {
    const agregaSaFigura= ("/"+ id + "s")
    history.push(agregaSaFigura);
  }

  return (
    <div className="estiloScreen">
      <div className="estiloCard">
        <img src={`https://i.ibb.co/${httpId}/${name}-Gde.jpg`} alt={name} className="imgGde" />
        <div className="estiloScreenTexto">
          <h2>{fullName}</h2>
          <p>{bio}</p>
          <p>{bio2}</p>
          <p>{bio3}</p>
          <p>{bio4}</p>
        </div>
      </div>
        <button type="button" className="estilosBoton2" onClick={handleClick}>Volver...

        </button>
    </div>
  )
}
