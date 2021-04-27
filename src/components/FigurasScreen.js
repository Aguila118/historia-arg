import React from 'react'
import { FigurasHechosList } from '../selectors/FigurasHechosList'

export const FigurasScreen = () => {
  return (
    <div>
      <FigurasHechosList tipoData="figura" />
    </div>
  )
}
