import React from 'react';
import { Link, NavLink, } from 'react-router-dom'
import escarapela from '../../../src/escarapela.svg';
import './Nav.css';


export const NavBar = () => {

  return (
    <div className="nav">
      
        <Link className="titulo" to="/proyecto">
          <img src={escarapela} alt="logo" className="escarapela"/>
          <h2>Figuras y Hechos de la Historia Argentina</h2>
        </Link>
     
      <div className="navButtons">

        <NavLink
          className="navItem"
          activeClassName="active"
          exact
          to="/figuras">
          Figuras
        </NavLink>

        <NavLink
          className="navItem"
          activeClassName="active"
          exact
          to="/Hechos">
          Hechos
        </NavLink>
        <NavLink
          className="navItem"
          activeClassName="active"
          exact
          to="/proyecto">
          Proyecto
        </NavLink>  
        
      </div>
    </div>
  )
}
