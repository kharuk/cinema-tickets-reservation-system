import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { links } from '../config/links';

class SitesSelectionPage extends Component {

  render() {

    return (
      <section className="page-content">
        <h1 style={{width: '100%'}}> sites</h1>
        <h2 style={{width: '100%'}}> Возможные места</h2>
        <ul style={{width: '100%'}}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        <Link to={links.FILM_PAGE}>Back</Link>
        <Link to={links.BOOKING_PAGE}>Next</Link>
      </section>
    )
  }
}

export default SitesSelectionPage;