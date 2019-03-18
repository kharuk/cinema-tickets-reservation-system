import React, {Component} from 'react';
import { Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from '../components/Layout';
import LoginPage from '../components/Authentication/Login';
import RegisterPage from '../components/Authentication/Register';
import FilmSearchPage from './FilmSearchPage';
import FilmPage from './FilmPage';
import SeatsSelectionPage from './SeatsSelectionPage';
import ProfilePage from './ProfilePage';

import { links } from '../config/links';
import {history} from '../store/';

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
          <Route exact path={ links.SITES_SELECTION_PAGE } component={ SeatsSelectionPage }/>
          <Route path={ links.ORDERS_PAGE } component={ ProfilePage }/>            
        </Switch>
      </Layout>
    );
  }

}

const mapSateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = {

};

export default Main;