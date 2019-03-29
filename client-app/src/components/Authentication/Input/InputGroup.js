import React, {Component} from 'react';
import Input from './index';

class InputGroup extends Component {
    render() {
      return (
        <div className="form-group authentication__input_group">
          <Input 
            type={'text'} 
            placeholder={'First Name'} 
            input_half_size={"form-login__input-half"}
            name="firstName" 
            onChange={this.props.onChange}
            caption={this.props.captionFirstName}
          />
          <Input 
            type={'text'} 
            placeholder={'Last Name'} 
            name="lastName" 
            input_half_size={"form-login__input-half"}
            onChange={this.props.onChange}
            caption={this.props.captionLastName}
          />
        </div>
      )
    }
}

export default InputGroup;