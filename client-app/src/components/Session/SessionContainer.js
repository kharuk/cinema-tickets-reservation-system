import React, {Component} from 'react';
import { links } from '../../config/links';
import {Link} from 'react-router-dom';
import Header from '../Authentication/Header';


class SessionContainer extends Component {

  render() {

    return (
      <section>
          <Header header="Sessions"/>
          <Link to={links.SITES_SELECTION_PAGE}><li>Сеанс 1</li></Link>
      </section>
    )
  }
}

export default SessionContainer;