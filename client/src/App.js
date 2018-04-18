import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import Dashboard from './pages/Dasbhoard';
import Success from './pages/Success';

import './App.css';


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/success" component={Success} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
