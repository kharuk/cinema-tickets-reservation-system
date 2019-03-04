import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom'
import { links } from '../config/links';

class BookingPage extends Component {

  state = {
    redirect: false
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  render() {

    if (this.state.redirect) {
      return <Redirect to={links.PROFILE_PAGE} />
    }

    return (
      <section className="page-content">
        <h1 style={{width: '100%'}}> info</h1>
        <ul style={{width: '100%'}}>
          <li>Фильм</li>
          <li>Место</li>
          <li>Услуги</li>
          <li>Стоимость</li>
        </ul>
        <button onClick={this.setRedirect} >Back2 </button>
        <Link to={links.SITES_SELECTION_PAGE}>Back</Link>
        <Link to={links.ORDERS_PAGE}>Next</Link>
      </section>
    )
  }
}

export default BookingPage;