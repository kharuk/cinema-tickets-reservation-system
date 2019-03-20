import React from 'react';
import FilmInfo from './FilmInfo';

const FilmInfoContainer = (props) => (
  <div className="row">
    <div className="col-md-12 ">
      <div className="row">
        {
          props.filmList &&
          props.filmList.map((item) => 
            <FilmInfo film={item}/>
          )
        }
      </div>
    </div>
  </div>
)

export default FilmInfoContainer;