import React from 'react'
import { FigurasHechosList } from '../selectors/FigurasHechosList'

export const HechosScreen = () => {
  return (
    <div>
      <FigurasHechosList tipoData="hecho" />
    </div>
  )
}
