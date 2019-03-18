import React from 'react';
import { Link } from 'react-router-dom'
import { links } from '../../config/links';

const ProfilePageNavBar = (props) =>{
  let currentHref = window.location.href.replace('http://localhost:3000', '');
  return (
    <div className="col-md-3">
      <div className="profile-page__sidebar">
        <div className="profile-page__usertitle">
          <div className="profile-page__usertitle-name">
            Marcus Doe
          </div>
          <div className="profile-page__usertitle-username">
            qwerty101010
          </div>
        </div>
        <div className="profile-page__menu">
          <ul className="navbar-nav profile-page__nav">
            <li className={`${currentHref === links.ORDERS_PAGE && `active`} nav-item`} >
              <Link to={links.ORDERS_PAGE} className="link nav-link">
              <i className="glyphicon glyphicon-home"></i>
              Current orders
              </Link>
            </li>
            <li className={`${currentHref === links.PREVIOUS_ORDERS_PAGE && `active`} nav-item`} >
              <Link to={links.PREVIOUS_ORDERS_PAGE} className="link nav-link">
              <i className="glyphicon glyphicon-ok"></i>
              Previous orders
              </Link>
            </li>
            <li className={`${currentHref === links.PROFILE_PAGE && `active`} nav-item`} >
              <Link to={links.PROFILE_PAGE} className="link nav-link">
              <i className="glyphicon glyphicon-user"></i>
              Account Settings 
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfilePageNavBar;