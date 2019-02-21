import React, {Component} from 'react';
import Header from '../Header';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import '../styles/login.scss';
import options from '../Option/optionData.json';

class SignInForm extends Component {

    render() {
      return (
        <form action="" className='form-login'>
          <Header />
          <div className="form-group form-login__form-group">
            <input type="text" placeholder="First Name" className="form-control form-login__control form-login__input-half"/>
            <input type="text" placeholder="Last Name" className="form-control form-login__control form-login__input-half"/>
          </div>
          <Input type={'text'} placeholder={'FirstName'}/>
          <Input type={'text'} placeholder={'Email Address'}/>
          <Select options={options}/>
          <Input type={'password'} placeholder={'Password'}/>
          <Input type={'password'} placeholder={'Confirm Password'}/>
          <Button text={"Register"}/>
        </form>
      )
    }
}

export default SignInForm;