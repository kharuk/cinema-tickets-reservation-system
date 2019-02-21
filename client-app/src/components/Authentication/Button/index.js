import React, {Component} from 'react';
import '../styles/login.scss';

class Button extends Component {

    render() {
      return (
        <button className="authentication__form-button">{this.props.text}
          <i className=""></i>
        </button>
      )
    }
}

export default Button;