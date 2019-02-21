import React, {Component} from 'react';
import '../styles/login.scss';

class Input extends Component {

    render() {
      return (
        <div className="form-group authentication__form-group">
         {/*} <label for={""} ><i></i></label>*/}
          <input type={this.props.text} name={""} id={""} placeholder={this.props.placeholder} className="form-control authentication__form-control"/>
          <i className=""></i>
        </div>
      )
    }
}

export default Input;