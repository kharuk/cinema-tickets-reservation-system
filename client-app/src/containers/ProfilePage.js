import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { links } from '../config/links';

class ProfilePage extends Component {


  render() {

    return (
      <section className="page-content">
        <h1 style={{width: '100%'}}> Profile</h1>
        <ul style={{width: '100%'}}>
          <li>Name</li>
          <li>Last Name</li>
          <li>User Name</li>
        </ul>
        <Link to={links.ORDERS_PAGE} >Orders</Link>
      </section>
      
    )
  }
}

export default  ProfilePage;