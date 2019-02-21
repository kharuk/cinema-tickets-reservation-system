import React, {Component} from 'react';
import SignInForm from './SignInForm';
import './styles/login.scss';


class Login extends Component {

    render() {
      return (
        <section className="wrapper">
          <div className="authentication__inner">
            <div className="image-holder">
            </div>
            <SignInForm />
          </div>
        </section>
      )
    }
}

export default Login;