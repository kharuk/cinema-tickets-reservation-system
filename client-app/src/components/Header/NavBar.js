import React, {Fragment, Component} from 'react';
import {NavLink} from 'react-router-dom';
import { links } from '../../config/links';

class NavBar extends Component {

  state = {
    loggedIn: this.props.LoggedIn
  }

  tick = () => {
    console.log('clicked');
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  render(){
    return (
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <button onClick={this.tick}>Click here!</button>
        <ul className="navbar-nav ml-auto">
          { 
            !this.state.loggedIn ?
              (<Fragment>
                <li className="nav-item mx-0 mx-lg-1">
                  <NavLink to={links.SIGN_IN_PAGE} className="nav-link py-3 px-0 px-lg-3 header__link_yellow">Sign In</NavLink>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <NavLink to={links.SIGN_UP_PAGE}  className="nav-link py-3 px-0 px-lg-3 header__link_yellow">Sing Up</NavLink>
                </li>
              </Fragment>)
            : 
              (<Fragment>
                <li className="nav-item mx-0 mx-lg-1">
                  <NavLink to={links.SIGN_IN_PAGE} className="nav-link py-3 px-0 px-lg-3 header__link_yellow">Sign Out</NavLink>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <NavLink to={links.FILM_SEARCH_PAGE}  className="nav-link py-3 px-0 px-lg-3 header__link_yellow">Find Film</NavLink>
                </li>
              </Fragment>)
          }
        </ul>
      </div>
    )
  }

}


export default NavBar;