import React, {Component} from 'react';
import Header from '../Header';
import Input from '../Input';
import InputGroup from '../Input/InputGroup';
import Select from '../Select';
import Button from '../Button';
import '../styles/login.scss';
import options from '../Option/optionData.json';
import {userActions}  from '../../../store/actions/userAction';
import { connect } from "react-redux";

class SignUpForm extends Component {

/*   validate = () => {
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
  } */

  state = {
    email: '',
    password: '',
    confirmPassword: '',
    submitted: false,
    firstName: '',
    lastName: '',
    location: '',
    gender: 'Male',
    errors: {}
  };

  handleChange = async(e) => { 
    const { name, value } = e.target;
    await this.setState({ [name]: value }) 
   // this.validate();
  }

  isEmpty = (obj) => {
    for (var key in obj) {
      return false;
    }
    return true;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { email, password, firstName, lastName, location, gender} = this.state;
  //  if (this.isEmpty(this.state.errors)) {
      this.props.signUp({email, password, firstName, lastName, location, gender});
  //  }
  }

  render() {
    return (
      <div className="authentication__form-wrapper">
        <Header header={'Sign Up Form'}/>
        <form onSubmit={this.handleSubmit} className='authentication__form-content'>
          <p className="help__block">{this.props.errorMessage}</p>
          <InputGroup onChange={this.handleChange}/>
          <Input 
            placeholder={'Email'}
            name="email" 
            type={'email'} 
            onChange={this.handleChange}
            //caption={errors.email}
          />
          <Input 
            type={'text'} 
            placeholder={'City'}
            name="location" 
            onChange={this.handleChange}
            //caption={errors.email}
          />
          <Select 
            options={options}
            onChange={this.handleChange}
            name="gender" 
          />

          <Input 
            type={'password'} 
            placeholder={'Password'}
            name="password" 
            onChange={this.handleChange}
            //caption={errors.email}
          />         
          <Input 
            type={'password'} 
            placeholder={'Confirm Password'}
            name="confirmPassword" 
            onChange={this.handleChange}
            //caption={errors.email}
          />
          <button className="authentication__form-button">Sign In</button>
{/*           <Button text={"Register"}/> */}
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
//  logout: () => dispatch(userActions.logout())
})

export default connect( mapStateToProps, mapDispatchToProps)(SignUpForm);