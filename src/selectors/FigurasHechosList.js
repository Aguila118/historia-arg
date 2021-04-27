import React, { useMemo } from 'react'
import { FigHec } from './FigHec'
import { getDataById } from './getDataById'


export const FigurasHechosList = ({tipoData}) => {

  const figuraHecho = useMemo(() => getDataById(tipoData),[tipoData])

  return (
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>
      {
        figuraHecho.map( data => (
          <FigHec key={data.name}{...data} />
      ))
      }
      
    </div>
  )
}
