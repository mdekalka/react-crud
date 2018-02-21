import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import AddProfile from './components/Profile/AddProfile/AddProfile';
import EditProfile from './components/Profile/EditProfile/EditProfile';
import ProfileView from './components/Profile/ProfileView/ProfileView';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavigationMenu />
        <Switch>
            <Route exact path='/' component={AddProfile}/>
            <Route path='/profile-view' component={ProfileView}/>
            <Route path='/edit-profile/:id' component={EditProfile}/>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
