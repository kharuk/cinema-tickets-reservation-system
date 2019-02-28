import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import '../styles/login.scss';
import { links } from '../../../config/links';

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
      return <Redirect to={links.FILM_SEARCH_PAGE} />
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