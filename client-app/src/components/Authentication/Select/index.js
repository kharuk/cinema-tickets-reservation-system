import React, { Component } from "react";
import "../styles/login.scss";
import Option from "../Option";

class Select extends Component {
  render() {
    return (
      <div className="form-group authentication__form-group">
        <select
          name={this.props.name}
          id=""
          className="form-control form-login__select authentication__form-control"
          onChange={this.props.onChange}
          required={this.props.required}
          value={this.props.value}
        >
          {this.props.options.map(item => (
            <Option key={item.id} item={item.name} value={item.value} />
          ))}
        </select>
        <i className="" />
        {this.props.caption && (
          <div className="help__block">{this.props.caption}</div>
        )}
      </div>
    );
  }
}

export default Select;
