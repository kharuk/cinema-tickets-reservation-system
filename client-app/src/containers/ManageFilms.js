import React, { Component } from 'react';
import Header from '../components/Authentication/Header';

import '../components/Session/session.scss';
import AddFilmForm from '../admin/ManageFilms/CreateFilm';


class ManageFilms extends Component {
  state = {
    count: 1,
  }

  render() {
    return (
      <section className="page-content">
        <div className="container">
          <Header header="Film" />
          <AddFilmForm/>
        </div>
      </section>
    );
  }
}


export default ManageFilms;
