import React from 'react';
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import LoginPage from './LoginPage/LoginPage';
import HomePage from './HomePage/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default function App() {

  return (
    <div className="App-header">
      <Router>
          <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/login' component={LoginPage} />
              <Route exact path='/home' component={HomePage} />

          </Switch>
      </Router>
    </div>
  );
}
