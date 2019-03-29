import React, {Component} from 'react';
import Input from '../Input';
import '../styles/login.scss';
import Header from '../Header';
import {userActions}  from '../../../store/actions/userAction';
import {emailValidator, passwordValidator} from '../../../services/Validator';
import { connect } from "react-redux";

class SignInForm extends Component {

  constructor(props) {
    super(props);
    this.props.logout();
  }
 
  state = {
    email: '',
    password: '',
    errors: {}
  };

  validate = () => {
    const errors = {};
    let emailError = emailValidator(this.state.email);
    let passwordError = passwordValidator(this.state.password);
    if (emailError) {
        errors.email = emailError
    }
    if (passwordError) {
        errors.password = passwordError
    }
    this.setState(
      {
        errors: errors
      }
    );
  }

  handleChange = async(e) => { 
    const { name, value } = e.target;
    await this.setState({ [name]: value }) 
    this.validate();
  }

  isEmpty = (obj) => {
    for (var key in obj) {
      return false;
    }
    return true;
  }

  handleSubmit = async(e) => {
    e.preventDefault();
    await this.validate();
    const { email, password } = this.state;
    if (this.isEmpty(this.state.errors)) {
      this.props.login({email, password});
    }
  }

  render() {
    const { loggingIn } = this.props;
    const { errors } = this.state;
    return (
      <div className="authentication__form-wrapper">
        <Header header={'Sign In Form'}/>
        <form onSubmit={this.handleSubmit} className='authentication__form-content'>
          <p className="help__block">{this.props.errorMessage}</p>
          <Input 
            name="email" 
            type={'email'} 
            placeholder={'Email'}
            onChange={this.handleChange}
            caption={errors.email}
          />
          <Input 
            type={'password'} 
            placeholder={'Password'}
            name="password" 
            onChange={this.handleChange}
            caption={errors.password}
          />
          <button className="authentication__form-button">Sign In</button>
        </form>
      </div> 
      
    )
  }
}

function mapStateToProps(state) {
  return {
      loggingIn: state.user.loggingIn,
      errorMessage: state.user.errorMessage
 };
}

const mapDispatchToProps = dispatch => ({
  login: (data) => dispatch(userActions.login(data)),
  logout: () => dispatch(userActions.logout())
})

export default connect( mapStateToProps, mapDispatchToProps)(SignInForm);