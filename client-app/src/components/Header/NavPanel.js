import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import './nav-menu.css';

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
                  <Link className="navbar-brand header__link_yellow" to="/">Home</Link>
                  <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item mx-0 mx-lg-1">
                        <Link to="/cinema" className="nav-link py-3 px-0 px-lg-3 header__link_yellow">Cinema</Link>
                      </li>
                      <li className="nav-item mx-0 mx-lg-1">
                        <Link to="/film" className="nav-link py-3 px-0 px-lg-3 header__link_yellow">Film</Link>
                      </li>
                      <li className="nav-item mx-0 mx-lg-1">
                        <Link to="/session" className="nav-link py-3 px-0 px-lg-3 header__link_yellow">Session</Link>
                      </li>
                    </ul>
                  </div>
                </div>                    
          </React.Fragment>
        </Route>
        </nav>


/*<nav className="navbar navbar-expand-lg bg-dark fixed-top text-uppercase" id="mainNav">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link" style="color: #ffc107c9; font-weight: 700;" href="/api/students/">Students</a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link" style="color: #ffc107c9; font-weight: 700;"  href="/api/teachers/">Teachers</a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link" style="color: #ffc107c9; font-weight: 700;"  href="/api/className/">classNamees</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>*/
    )
  }

}

export default NavPanel;