import React from 'react'
import { Link } from 'react-router-dom'
import './ProyectoScreen.css'

export const ProyectoScreen = () => {
  return (
    <>
      <div>
        <h3>Proyécto creado en la práctica de Aprendizaje de React Js</h3>
        <p>La página es una SPA (Single Page Application), lo ultimo en tecnologia de paginas estáticas y de carga veloz.</p>
        <p>En este apartado se hace especial incapíe en el uso de <strong>Routing</strong>, con react-router-dom, creacion de rutas para apuntar a los diferentes componentes.</p>
        <p>Se utilizan Hooks como:<br/><br/>
          <li>UseMemo</li>
          <li>useParams (react-router-dom)</li>
          <li>History, para recordar donde dejo el usuario su ultima visita.</li>  
        </p>
        <br/>
        <p>El Proyecto trae Figuras y Hechos relevantes de la história Argentina con sus respectiva información para ahondar en profundidad sobre los temas de interés, estos se muestran de manera dinámica y rápida, usted puede comenzar haciendo Click en <strong>FIGURAS</strong> o <strong>FIGURAS</strong> para empezar a navegar o simplemente desde el barra de navegación superior.</p>
        <br/>
      </div>
        <div className="linksContainer">
        <Link to={`./figuras` } className="links">
                  FIGURAS
        </Link>
        <Link to={`./hechos` } className="links">
                  HECHOS
        </Link>
      </div>
      <br/>
    </>
  )
}
