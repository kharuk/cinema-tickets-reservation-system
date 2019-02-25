import React, {Component} from 'react';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import '../styles/login.scss';
import options from '../Option/optionData.json';

class Logo extends Component {

    render() {
      return (
        <div className="authentication__image">
          <img src={this.props.src} alt={this.props.alt} />
        </div> 
      )
    }
}

export default Logo;