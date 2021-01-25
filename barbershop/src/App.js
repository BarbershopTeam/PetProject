import './App.css';
import React from 'react';
import {Route, Switch} from "react-router";
import {NavLink} from "react-router-dom";
import Booking from "./components/Booking/Booking";
import Team from "./components/Team/Team";


function App() {
  return (
      <>

        <div id='header'>
          <ul>
            <li className='links'><NavLink to='/'>Дім</NavLink></li>
            <li className='links'><NavLink to='/booking'>Запис</NavLink></li>
            <li className='links'><NavLink to='/team'>Наша Команда</NavLink></li>
          </ul>
        </div>

        <div id='body'>

        </div>

        <div id='footer'>

        </div>

          <Switch>
              <Route path='/booking' component={Booking}/>
              <Route path='/team' component={Team}/>

              <Route render={ () => <h1>Error 404</h1>}/>
              <Route path='/' render={() => <h1>HOME</h1>}/>
          </Switch>

      </>
  );
}

export default App;
