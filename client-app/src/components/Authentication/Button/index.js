import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import '../styles/login.scss';
import { links } from '../../../config/links';

class Button extends Component {

  render() {
    return (
      <div>
        <Link 
          to={links.FILM_SEARCH_PAGE} 
          className="authentication__form-button" 
          role="button"
        >
          {this.props.text}
        </Link>
      </div>
    )
  }
}

export default Button;