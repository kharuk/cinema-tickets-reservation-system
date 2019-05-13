import React, { Component } from 'react';
import Header from '../components/Authentication/Header';
import { connect } from 'react-redux';
import '../components/Session/session.scss';
import AddFilmForm from '../admin/ManageFilms/CreateFilm';
import FilmList from '../admin/FilmList';
import ShowContent from '../admin/ShowContent';
import {
  withRouter, Route, Switch,
} from 'react-router-dom';

import {fetchFilms} from '../store/actions/searchFilmAction';
import { links } from '../config/links';


class ManageFilms extends Component {
  state = {
    count: 1,
  }

  componentDidMount() {
    this.props.fetchFilms();
  }

  render() {
    let {films} = this.props;
    return (
      <section className="page-content">
        <div className="container">
          <Header header="Film" />
          <ShowContent>
            <Route
              exact path={links.MANAGE_MOVIES}
              render={props => (
                <FilmList
                  {...props}
                  filmList={films}

                />
              )}
            /> 
            <Route
              exact path={links.ADD_FILM}
              component={AddFilmForm}
            /> 

            {/*         <Route exact path={links.MANAGE_CINEMAS} component={ManageCinemas} />
            <Route exact path={links.MANAGE_SESSIONS} component={ManageSessions} /> */} 
          </ShowContent>
          
           
          
   
      
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  films: state.search.films,
});

const mapDispatchToProps = dispatch => ({
  fetchFilms: () => dispatch(fetchFilms()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ManageFilms);
