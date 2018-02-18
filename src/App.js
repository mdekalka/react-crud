import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import AddProfilePage from './pages/AddProfilePage'

class App extends Component {
  render() {
    return (
      <Switch>
          <Route exact path='/' component={AddProfilePage}/>
          {/* <Route path='/roster' component={Roster}/>
          <Route path='/schedule' component={Schedule}/> */}
      </Switch>
    );
  }
}

export default App;
