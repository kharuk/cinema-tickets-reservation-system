import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';
import './nav-menu.scss';

class NavPanel extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <nav className="navbar navbar-expand-lg bg-dark fixed-top text-uppercase">
        <Route>
          <React.Fragment>              
            <div className="container">  
              <NavLink className="navbar-brand header__link_yellow" to="/">Home</NavLink>
              <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-dark navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item mx-0 mx-lg-1">
                    <NavLink to="/sign-in" className="nav-link py-3 px-0 px-lg-3 header__link_yellow">Sign In</NavLink>
                  </li>
                  <li className="nav-item mx-0 mx-lg-1">
                    <NavLink to="/sign-up" className="nav-link py-3 px-0 px-lg-3 header__link_yellow">Sing Up</NavLink>
                  </li>
                </ul>
              </div>
            </div>                    
          </React.Fragment>
        </Route>
        </nav>
    )
  }

}

export default NavPanel;