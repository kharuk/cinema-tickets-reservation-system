import React, {Component} from 'react';
import Input from '../Authentication/Input';
import InputGroup from '../Authentication/Input/InputGroup';
import Select from '../Authentication/Select';
import Button from '../Authentication/Button';
import options from '../Authentication/Option/optionData.json';

class AccountSettings extends Component {

    render() {
      return (
        <div className="accountSettings__container">
          <form action="" className='accountSettings__content'>
            <InputGroup />
            <Input type={'text'} placeholder={'User Name'}/>
            <Input type={'text'} placeholder={'City'}/>
            <Select options={options}/>
            <Input type={'password'} placeholder={'Password'}/>
            <Input type={'password'} placeholder={'Confirm Password'}/>
            <Button text={"Save"}/>
          </form>
        </div>     
      )
    }
}

export default AccountSettings;