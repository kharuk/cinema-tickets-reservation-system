import React, { Component } from 'react';
import Input from '../Authentication/Input';
import InputGroup from '../Authentication/Input/InputGroup';
import Select from '../Authentication/Select';
import Button from '../Authentication/Button';
import options from '../Authentication/Option/optionData.json';

class AccountSettings extends Component {
  render() {
    const { userInfo } = this.props;
    return (
      <div className="accountSettings__container">
        <form action="" className="accountSettings__content">
          <InputGroup userInfo={userInfo} />
          <Input type="text" placeholder={`Email: ${userInfo.email}`} />
          <Input type="text" placeholder={`City: ${userInfo.location}`} />
          <Input type="text" placeholder={`Gender: ${userInfo.gender}`} />
        </form>
      </div>
    );
  }
}

export default AccountSettings;
