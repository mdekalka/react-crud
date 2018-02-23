import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Grid, Row } from 'react-bootstrap';
import './App.scss';

import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import AddProfile from './components/Profile/AddProfile/AddProfile';
import EditProfile from './components/Profile/EditProfile/EditProfile';
import ProfileView from './components/Profile/ProfileView/ProfileView';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <NavigationMenu />
          <Switch>
              <Route exact path='/' component={AddProfile}/>
              <Route path='/profile-view' component={ProfileView}/>
              <Route path='/edit-profile/:id' component={EditProfile}/>
          </Switch>
        </Row>
      </Grid>
    );
  }
}

export default App;
