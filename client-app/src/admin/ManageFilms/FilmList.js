import React, {Component} from 'react';
import FilmItem from './FilmItem';
import { Link } from 'react-router-dom';
import { links } from '../../config/links';
import socket from '../../constants/socket';

class  FilmInfoContainer extends Component{
  componentDidMount() {
    this.props.fetchFilms();
    socket.off('films updated'); 
		socket.on('films updated', () => {
      console.log('updated');
			this.props.fetchFilms()
    });
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-md-12 ">
          <div className="row film-tab__button-create">
            <Link to={links.ADD_FILM} className="film-tab__button">Add Film</Link>
          </div>
          <div className="row">
            {this.props.filmList
              && Object.values(this.props.filmList).map(
                item => <FilmItem 
                  removeItem={this.props.removeItem} 
                  updateItem={this.props.updateItem}
                  film={item.film_info} 
                  key={item._id} 
                  id={item._id} 
                />,
              )}
          </div>
        </div>
      </div>
    );
  }
} 

export default FilmInfoContainer;