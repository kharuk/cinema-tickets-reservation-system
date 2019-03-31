import React, {Component} from 'react';
import { Router, Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from '../components/Layout';
import LoginPage from '../components/Authentication/Login';
import RegisterPage from '../components/Authentication/Register';
import FilmSearchPage from './FilmSearchPage';
import FilmPage from './FilmPage';
import SeatsSelectionPage from './SeatsSelectionPage';
import ProfilePage from './ProfilePage';
import PrivateRoute from '../shared/PrivateRouter';
import ReduxToastr from 'react-redux-toastr'
import { links } from '../config/links';
import {history} from '../store/';
import {userActions}  from '../store/actions/userAction';


class Main extends Component {

  render() {
    const {isLoggedIn, role } = this.props;
    return (
      <Router history={history}>
        <Layout
          loggedIn={isLoggedIn}
          role={role}
        >
          <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="top-left"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick
          />
          <Switch>
            <Route exact path={ links.MAIN_PAGE_PATH }/>
            <Route exact path={ links.SIGN_IN_PAGE  } component={ LoginPage }/>
            <Route exact path={ links.SIGN_UP_PAGE } component={ RegisterPage }/>
            <PrivateRoute requiredRoles={['User', 'Admin']} exact path={ links.FILM_SEARCH_PAGE } component={ FilmSearchPage }/>
            <PrivateRoute requiredRoles={['User', 'Admin']} exact path={ links.FILM_PAGE } component={ FilmPage }/>
            <PrivateRoute requiredRoles={['User', 'Admin']} exact path={ links.SITES_SELECTION_PAGE } component={ SeatsSelectionPage }/>
            <PrivateRoute requiredRoles={['User', 'Admin']} path={ links.ORDERS_PAGE } component={ ProfilePage }/>         
          </Switch>
        </Layout>
      </Router>
    );
  }

}

function mapStateToProps(state) {
  return {
      isLoggedIn: state.user.isLoggedIn,
      role: state.user.user ? state.user.user.role : '',
 };
}

export default connect(mapStateToProps, null)(Main);