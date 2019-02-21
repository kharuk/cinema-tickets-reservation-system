import React, {Component} from 'react';
import SignUpForm from './SignInForm';
import './styles/login.scss';


class Register extends Component {

    render() {
      return (
        <section className="authentication__form">
          <div class='container'>
            <div className="authentication__content">
              <div className="authentication__image">
                <img src="static/media/registration-form-1.ba0bc626.jpg" alt="sing up image" />
              </div>
              <div className="authentication__form-wrapper">
                <Header header={'Sign Up Form'}/>
                <SignUpForm />
              </div>   
            </div>
          </div>
        </section>
      )
    }
}

export default Register;