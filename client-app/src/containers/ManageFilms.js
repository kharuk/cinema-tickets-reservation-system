/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import AddFilmForm from '../admin/ManageFilms/CreateFilm';
import FilmList from '../admin/ManageFilms/FilmList';
import ShowContent from '../admin/ShowContent';
import Header from '../components/Authentication/Header';
import { fetchFilms } from '../store/actions/searchFilmAction';
import { removeItem, updateItem, fetchFilm } from '../store/actions/adminActions';
import { links } from '../config/links';
import '../components/Session/session.scss';


const ManageFilms = (props) => {
  const {
    films, removeItem, updateItem, fetchFilm, fetchFilms,
  } = props;
  return (
    <section className="page-content">
      <div className="container">
        <Header header="Film" />
        <ShowContent>
          <Route
            exact
            path={links.MANAGE_MOVIES}
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
            exact
            path={links.ADD_FILM}
            component={AddFilmForm}
          />
          <Route
            exact
            path={links.UPDATE_FILM}
            render={props => (
              <AddFilmForm
                {...props}
                fetchFilm={fetchFilm}
                updateFilm={updateItem}
                isEditable
              />
            )}
          />
        </ShowContent>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  films: state.search.films,
});

const mapDispatchToProps = dispatch => ({
  fetchFilms: () => dispatch(fetchFilms()),
  removeItem: id => dispatch(removeItem(id)),
  updateItem: (id, data, previousPhoto) => dispatch(updateItem(id, data, previousPhoto)),
  fetchFilm: id => dispatch(fetchFilm(id)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ManageFilms);
