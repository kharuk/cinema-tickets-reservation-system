import React, {Component} from 'react';
import Header from '../Header';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import '../styles/login.scss';
import options from '../Option/optionData.json';

class SignUpForm extends Component {

    render() {
      return (
        <form action="" className='authentication__form-content'>
          <div className="form-group authentication__form-group">
            <input type="text" placeholder="First Name" className="form-control authentication__form-control form-login__input-half"/>
            <input type="text" placeholder="Last Name" className="form-control authentication__form-control form-login__input-half"/>
          </div>
          <Input type={'text'} placeholder={'User Name'}/>
          <Input type={'password'} placeholder={'Password'}/>
          <Select options={options}/>
          <Input type={'password'} placeholder={'Password'}/>
          <Input type={'password'} placeholder={'Confirm Password'}/>
          <Button text={"Register"}/>
        </form>
      )
    }
}

export default SignUpForm;