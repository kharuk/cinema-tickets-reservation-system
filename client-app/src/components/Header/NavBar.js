import React, { Fragment, Component } from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../../config/links';

class NavBar extends Component {
  render() {
    const { loggedIn, role } = this.props;
    return (
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          {
            !loggedIn
              ? (
<Fragment>
                <li className="nav-item mx-0 mx-lg-1">
                  <NavLink to={links.SIGN_IN_PAGE} className="nav-link py-3 px-0 px-lg-3 header__link_yellow">Sign In</NavLink>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <NavLink to={links.SIGN_UP_PAGE}  className="nav-link py-3 px-0 px-lg-3 header__link_yellow">Sing Up</NavLink>
                </li>
              </Fragment>
)
            :               (
<Fragment>
                <li className="nav-item mx-0 mx-lg-1">
                  <NavLink to={links.SIGN_IN_PAGE} className="nav-link py-3 px-0 px-lg-3 header__link_yellow">Sign Out</NavLink>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <NavLink to={links.ORDERS_PAGE}  className="nav-link py-3 px-0 px-lg-3 header__link_yellow">Profile</NavLink>
                </li>
              </Fragment>
)
          )}
        </ul>
      </div>
    );
  }
}


export default NavBar;
