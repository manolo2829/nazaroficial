import React from "react";
import Inicio from "./components/Inicio";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Nosotros from "./components/Nosotros";
import Menu from "./components/Menu";
import LogIn from "./components/LogIn";


const App = () =>{
  return (
    <div>
      <Router>
        <Menu></Menu>
        <main>
          <Switch>
            <Route path='/' exact component={Inicio}></Route>
            <Route path='/nosotros' component={Nosotros}></Route>
            <Route path='/login' component={LogIn}></Route>
          </Switch>
        </main>
      </Router>
    </div>
  )
}

export default App;
