import React from 'react';
import FilmInfo from './FilmInfo';

const FilmInfoContainer = (props) => (
  <div className="row">
    <div className="col-md-12 ">
      <div className="row">
        {
          props.filmList && 
          Object.entries( props.filmList ).map((item) => 
            <FilmInfo film={item[1]} key={item[0]} id={item[0]}/>
          )
        }
      </div>
    </div>
  </div>
)

export default FilmInfoContainer;