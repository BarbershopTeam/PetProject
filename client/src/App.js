import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import Booking from './components/Booking/Booking';
import Team from './components/Team/Team';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import UserAgreement from './components/User-Agreement/User-Agreement'

function App() {
  return (
    <div>

      <div id="header">
        <ul>
          <li className="links"><NavLink to="/">Дім</NavLink></li>
          <li className="links"><NavLink to="/booking">Запис</NavLink></li>
          <li className="links"><NavLink to="/team">Наша Команда</NavLink></li>
          <li className="links auth"><NavLink to="/signup">Зареєструватись</NavLink></li>
          <li className="links auth"><NavLink to="/login">Увійти</NavLink></li>
        </ul>
      </div>

      <div id="body" />

      <div id="footer" />

      <Switch>
        <Route path="/booking" component={Booking} />
        <Route path="/team" component={Team} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Registration} />
        <Route path="/user-agreement" component={UserAgreement} />

        <Route path="/" render={() => <h1>HOME</h1>} />
        <Route render={() => <h1>Error 404</h1>} />
      </Switch>

    </div>
  );
}

export default App;
