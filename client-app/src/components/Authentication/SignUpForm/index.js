import React, {Component} from 'react';
import Header from '../Header';
import Input from '../Input';
import InputGroup from '../Input/InputGroup';
import Select from '../Select';
import '../styles/login.scss';
import options from '../Option/optionData.json';
import {userActions}  from '../../../store/actions/userAction';
import { connect } from "react-redux";
import {emailValidator, passwordValidator, isEmptyValidator, confirmPasswordValidator} from '../../../services/Validator';

class SignUpForm extends Component {

  constructor(props) {
    super(props);
    this.props.logout();
  }
  
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    location: '',
    gender: '',
    errors: {}
  };

  validate = () => {
    const errors = {};  
    let firstNameError = isEmptyValidator(this.state.firstName);
    let lastNameError = isEmptyValidator(this.state.lastName);
    let locationError = isEmptyValidator(this.state.location);
    let genderError = isEmptyValidator(this.state.gender);
    let emailError = emailValidator(this.state.email);
    let passwordError = passwordValidator(this.state.password);
    let confirmPasswordError = confirmPasswordValidator(this.state.password, this.state.confirmPassword);  
    if (firstNameError) {
      errors.firstName = firstNameError
    }
    if (lastNameError) {
      errors.lastName = lastNameError
    }
    if (locationError) {
      errors.location = locationError
    }
    if (genderError) {
      errors.gender = genderError
    }
    if (emailError) {
        errors.email = emailError
    }
    if (passwordError) {
        errors.password = passwordError
    }
    if (confirmPasswordError) {
      errors.confirmPassword = confirmPasswordError
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
    const { email, password, firstName, lastName, location, gender} = this.state;
    if (this.isEmpty(this.state.errors)) {
      this.props.signUp({email, password, firstName, lastName, location, gender});
    }
  }

  render() {
    const {errors} = this.state;
    return (
      <div className="authentication__form-wrapper">
        <Header header={'Sign Up Form'}/>
        <form onSubmit={this.handleSubmit} className='authentication__form-content'>
          <p className="help__block">{this.props.errorMessage}</p>
          <InputGroup 
            onChange={this.handleChange}
            captionFirstName={errors.firstName}
            captionLastName={errors.lastName}
          />
          <Input 
            placeholder={'Email'}
            name="email" 
            type={'email'} 
            onChange={this.handleChange}
            caption={errors.email}
          />
          <Input 
            type={'text'} 
            placeholder={'City'}
            name="location" 
            onChange={this.handleChange}
            caption={errors.location}
          />
          <Select 
            options={options}
            onChange={this.handleChange}
            name="gender" 
            caption={errors.gender}
          />
          <Input 
            type={'password'} 
            placeholder={'Password'}
            name="password" 
            onChange={this.handleChange}
            caption={errors.password}
          />         
          <Input 
            type={'password'} 
            placeholder={'Confirm Password'}
            name="confirmPassword" 
            onChange={this.handleChange}
            caption={errors.confirmPassword}
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
  signUp: (data) => dispatch(userActions.signup(data)),
  logout: () => dispatch(userActions.logout())
})

export default connect( mapStateToProps, mapDispatchToProps)(SignUpForm);