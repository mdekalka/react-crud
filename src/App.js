import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import AddProfile from './components/Profile/AddProfile/AddProfile'

class App extends Component {
  render() {
    return (
      <Switch>
          <Route exact path='/' component={AddProfile}/>
          {/* <Route path='/roster' component={Roster}/>
          <Route path='/schedule' component={Schedule}/> */}
      </Switch>
    );
  }
}

export default App;
