import React, {Component} from 'react';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import '../styles/login.scss';
import options from '../Option/optionData.json';

class SignInForm extends Component {

    render() {
      return (
        <form action="" className='authentication__form-content'>
          <Input type={'text'} placeholder={'User Name'}/>
          <Input type={'password'} placeholder={'Password'}/>
          <Button text={"Sign In"}/>
        </form>
      )
    }
}

export default SignInForm;