import React, {Component} from 'react';
import './styles/login.scss';

class Login extends Component {

    render() {
      return (
        <section className="wrapper">
        <div className="inner">
          <div className="image-holder">
            <img src="/images/registration-form-1.jpg" alt=""/>
          </div>
          <form action="" className='login-form'>
            <h3>Registration Form</h3>
            <div className="form-group">
              <input type="text" placeholder="First Name" className="form-control"/>
              <input type="text" placeholder="Last Name" className="form-control"/>
            </div>
            <div className="form-wrapper">
              <input type="text" placeholder="Username" className="form-control"/>
              <i className="zmdi zmdi-account"></i>
            </div>
            <div className="form-wrapper">
              <input type="text" placeholder="Email Address" className="form-control"/>
              <i className="zmdi zmdi-email"></i>
            </div>
            <div className="form-wrapper">
              <select name="" id="" className="form-control">
                <option value="" disabled selected>Gender</option>
                <option value="male">Male</option>
                <option value="femal">Female</option>
                <option value="other">Other</option>
              </select>
              <i className="zmdi zmdi-caret-down"></i>
            </div>
            <div className="form-wrapper">
              <input type="password" placeholder="Password" className="form-control"/>
              <i className="zmdi zmdi-lock"></i>
            </div>
            <div className="form-wrapper">
              <input type="password" placeholder="Confirm Password" className="form-control"/>
              <i className="zmdi zmdi-lock"></i>
            </div>
            <button>Register
              <i className="zmdi zmdi-arrow-right"></i>
            </button>
          </form>
        </div>
      </section>
      )
    }
}

export default Login;