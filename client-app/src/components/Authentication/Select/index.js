import React, {Component} from 'react';
import '../styles/login.scss';
import Option from '../Option';

class Select extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-group form-wrapper">
        <select name="" id="" className="form-control form-login__select form-login__control">
        {
          this.props.options.map( 
          (item) => <Option key={item.id} item={item.name} value={item.value} />)
        }
        </select>
        <i className=""></i>
      </div>
    )
  }
}

export default Select;