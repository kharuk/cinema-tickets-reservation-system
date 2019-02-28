import React, {Component} from 'react';
import { Switch, Route} from 'react-router-dom';

import Layout from '../components/Layout';
import LoginPage from '../components/Authentication/Login';
import RegisterPage from '../components/Authentication/Register';
import FilmSearchPage from './FilmSearchPage';
import FilmPage from './FilmPage';
import SitesSelectionPage from './SitesSelectionPage';
import BookingPage from './BookingPage';
import OrdersPage from './OrdersPage';
import ProfilePage from './ProfilePage';

import { links } from '../config/links';

class Main extends Component {

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path={ links.MAIN_PAGE_PATH }/>
          <Route exact path={ links.SIGN_IN_PAGE  } component={ LoginPage }/>
          <Route exact path={ links.SIGN_UP_PAGE } component={ RegisterPage }/>
          <Route exact path={ links.FILM_SEARCH_PAGE } component={ FilmSearchPage }/>
          <Route exact path={ links.FILM_PAGE } component={ FilmPage }/>
          <Route exact path={ links.SITES_SELECTION_PAGE } component={ SitesSelectionPage }/>
          <Route exact path={ links.BOOKING_PAGE } component={ BookingPage }/>
          <Route exact path={ links.PROFILE_PAGE } component={ ProfilePage }/>    
          <Route exact path={ links.ORDERS } component={ OrdersPage }/>     
        </Switch>
      </Layout>
    );
  }

}

export default Main;