import React, {Component} from 'react';
import Input from '../Input';
import Button from '../Button';
import '../styles/login.scss';
import Header from '../Header';

class SignInForm extends Component {

    render() {
      return (
        <div className="authentication__form-wrapper">
          <Header header={'Sign In Form'}/>
          <form action="" className='authentication__form-content'>
            <Input type={'text'} placeholder={'User Name'}/>
            <Input type={'password'} placeholder={'Password'}/>
            <Button text={"Sign In"}/>
          </form>
        </div> 
        
      )
    }
}

export default SignInForm;