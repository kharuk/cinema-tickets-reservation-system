import React from 'react';
import FilmInfo from './FilmInfo';

const FilmInfoContainer = () => (
  <div className="row">
    <div className="col-md-12 ">
      <div className="row">
        <FilmInfo />
        <FilmInfo />
        <FilmInfo />
        <FilmInfo />
        <FilmInfo />  
      </div>
    </div>
  </div>
)

export default FilmInfoContainer;