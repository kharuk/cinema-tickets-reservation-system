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

import { fetchFilms } from '../store/actions/searchFilmAction';
import { removeItem, updateItem, fetchFilm } from '../store/actions/adminActions'
import { links } from '../config/links';


class ManageFilms extends Component {
  state = {
    count: 1,
  }

  componentDidMount() {
  
  }

  render() {
    let {films, removeItem, updateItem, fetchFilm, fetchFilms} = this.props;
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
                  removeItem={removeItem}
                  updateItem={updateItem}
                  fetchFilms={fetchFilms}
                />
              )}
             
            /> 
            <Route
              exact path={links.ADD_FILM}
              component={AddFilmForm}
            /> 
            <Route
              exact path={links.UPDATE_FILM}
              render={props => (
                <AddFilmForm
                {...props}
                fetchFilm={fetchFilm}
                updateFilm={updateItem}
                isEditable={true}
                />
              )}

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
  removeItem: (id) => dispatch(removeItem(id)),
  updateItem: (id, data) => dispatch(updateItem(id, data)),
  fetchFilm: (id) => dispatch(fetchFilm(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ManageFilms);
