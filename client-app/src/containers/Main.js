import React, {Component} from 'react';
import { Switch, Route} from 'react-router-dom';

import Layout from '../components/Layout';
import LoginPage from '../components/Authentication/Login';
import RegisterPage from '../components/Authentication/Register';
import FilmSearchPage from './FilmSearchPage';

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
        </Switch>
      </Layout>
    );
  }

}

export default Main;