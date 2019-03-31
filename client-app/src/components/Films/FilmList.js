import React from 'react';
import FilmInfo from './FilmInfo';

const FilmInfoContainer = (props) => (
  <div className="row">
    <div className="col-md-12 ">
      <div className="row">
        {
          props.filmList && 
          Object.values( props.filmList ).map((item) => 
            <FilmInfo film={item.film} key={item.id} id={item.id}/>
          )
        }
      </div>
    </div>
  </div>
)

export default FilmInfoContainer;