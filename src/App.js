import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import AddProfile from './components/Profile/AddProfile/AddProfile';
import ProfileView from './components/Profile/ProfileView/ProfileView';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavigationMenu />
        <Switch>
            <Route exact path='/' component={AddProfile}/>
            <Route path='/profile-view' component={ProfileView}/>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
