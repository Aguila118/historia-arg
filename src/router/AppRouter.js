import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { FigHecScreen } from '../components/FigHecScreen';
import { FigurasScreen } from '../components/FigurasScreen';
import { HechosScreen } from '../components/HechosScreen';
import { ProyectoScreen } from '../components/ProyectoScreen';
import { TiraDeBandera } from '../components/TiraDeBandera';
import { NavBar } from '../components/ui/NavBar';


export const AppRouter = () => {
  return (

    
    <Router>
      <NavBar />
      <TiraDeBandera />
      <Switch>
          <Route exact path="/figuras" component={FigurasScreen} />
          <Route exact path="/hechos" component={HechosScreen} />
          <Route exact path="/proyecto" component={ProyectoScreen} />
          <Route exact path="/figuraHecho/:name" component={FigHecScreen} />

          <Redirect to="/proyecto" />
      </Switch>
    </Router>
    
      
 
  )
}
