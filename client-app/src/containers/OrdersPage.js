import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { links } from '../config/links';

class OrdersPage extends Component {

  render() {

    return (
      <section className="page-content">
        <h1 style={{width: '100%'}}> Orders</h1>
        <ul style={{width: '100%'}}>
          <li>Order 1</li>
          <li>Order 2</li>
          <li>Order 3</li>
          <li>Order 4</li>
        </ul>
        <Link to={links.PROFILE_PAGE} >Profile</Link>
      </section>
    )
  }
}

export default  OrdersPage;