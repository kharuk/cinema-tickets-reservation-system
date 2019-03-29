import React, {Component} from 'react';
import '../styles/login.scss';

class Input extends Component {

    render() {
      return (
        <div className="form-group authentication__form-group">
          <input 
            type={this.props.type} 
            name={this.props.name} 
            minLength={this.props.minLength}
            maxLength={this.props.maxLength}
            required={this.props.required}
            placeholder={this.props.placeholder} 
            className={`form-control authentication__form-control ${this.props.input_half_size}`}
            onChange={this.props.onChange}
            value={this.props.value}
          />
          <i className=""></i>
          {this.props.caption &&
            <div className="help__block">{this.props.caption}</div>
          }
        </div>
      )
    }


}

Input.defaultProps = {
  minLength: 1,
  maxLength: 20,
  required: true,
  value: ''
};

export default Input;