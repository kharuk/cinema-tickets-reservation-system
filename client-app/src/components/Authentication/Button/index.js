import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import '../styles/login.scss';

class Button extends Component {

  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/target' />
    }
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <button className="authentication__form-button" onClick={this.setRedirect} >{this.props.text}
          <i className=""></i>
        </button>
      </div>
    )
  }
}

export default Button;