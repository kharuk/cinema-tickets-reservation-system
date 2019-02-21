import React, {Component} from 'react';
import SignInForm from './SignInForm';
import './styles/login.scss';
import Header from './Header';
import SignUpForm from './SignUpForm';


class Login extends Component {

    render() {
      return (
        <section className="authentication__form">
          <div class='container'>
            <div className="authentication__content">
              <div className="authentication__image">
                <img src="static/media/registration-form-2.922990c4.jpg" alt="sing up image" />
              </div>
              <div className="authentication__form-wrapper">
                <Header header={'Sign In Form'}/>
                <SignInForm />
              </div>   
            </div>
          </div>
        </section>
      )
    }
}

export default Login;