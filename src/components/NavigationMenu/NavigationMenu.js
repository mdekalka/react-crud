import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NavigationMenu.scss';
 
class NavigationMenu extends Component {
  render() {
    return (
      <nav className="navigation-nav text-center">
        <ul className="navigation-menu">
          <li className="menu-item"><Link to={'/'}>Add profile</Link></li>
          <li className="menu-item"><Link to={'/profile-view'}>Profile view</Link></li>
        </ul>
      </nav>
    )
  }
}

export default NavigationMenu;
