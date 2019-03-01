import React, {Component} from 'react';
import '../components/Films/film.scss';
import FilmInfoContainer from '../components/Films/FilmInfoContainer';
import FilmFilter from '../components/Films/FilmFilter';
import Header from '../components/Authentication/Header';


class FilmSearchPage extends Component {

  render() {
    return (
      <section className="page-content">
        <div className="container">
          {/*<div className="row">
            <h2 className="authentication__header">Film Search</h2>
    </div>*/}
          <Header header="Film Search"/>
          <FilmFilter />
          <FilmInfoContainer />
        </div>
      </section>
    )
  }
}

export default FilmSearchPage;