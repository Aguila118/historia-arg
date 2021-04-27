import React from 'react'
import { Authcontext } from './Auth/AuthContext'
import { AppRouter } from './router/AppRouter'
import './main.css'

export const PersonajesHechos = () => {
  return (
    <Authcontext.Provider value={{}}>
      <div className="mainContainer">
        <AppRouter />
      </div>
    </Authcontext.Provider >
  )}
