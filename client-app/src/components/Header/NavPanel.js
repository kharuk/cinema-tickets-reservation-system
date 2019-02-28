import React, { Component} from 'react';
import {NavLink} from 'react-router-dom';
import NavBar from './NavBar';
import BurgerButton from './BurgerButton';
import './nav-menu.scss';

class NavPanel extends Component{

  render(){
    return (
      <nav className="navbar navbar-expand-lg bg-dark fixed-top text-uppercase">            
        <div className="container">  
          <NavLink className="navbar-brand header__link_yellow" to="/">Home</NavLink>
          <BurgerButton />
          <NavBar/>  
        </div>              
      </nav>
    )
  }

}

export default NavPanel;