import React, { Component} from 'react';
import {NavLink} from 'react-router-dom';

class NavBar extends Component{

  render(){
    return (
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mx-0 mx-lg-1">
            <NavLink to="/account/login" className="nav-link py-3 px-0 px-lg-3 header__link_yellow">Sign In</NavLink>
          </li>
          <li className="nav-item mx-0 mx-lg-1">
            <NavLink to="/account/signup" className="nav-link py-3 px-0 px-lg-3 header__link_yellow">Sing Up</NavLink>
          </li>
        </ul>
      </div>
    )
  }

}

export default NavBar;