import React, {Component} from 'react';
import '../styles/login.scss';

class Input extends Component {

    render() {
      return (
        <div className="form-group form-wrapper">
          <input type={this.props.text} placeholder={this.props.placeholder} className="form-control form-login__control"/>
          <i className=""></i>
      </div>
      )
    }
}

export default Input;