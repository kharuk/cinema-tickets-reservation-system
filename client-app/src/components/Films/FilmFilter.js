import React, {Component} from 'react';
import Input from '../Authentication/Input';
import Button from '../Authentication/Button';
import '../Authentication/styles/login.scss';


class FilmFilter extends Component {

  render() {
    return (
      <section className="">
          <h2>Here will be search filter</h2>
          <form action="" className='authentication__form-content'>
            <Input type={'text'} placeholder={'Film'}/>
            <Input type={'text'} placeholder={'City'}/>
            <Input type={'text'} placeholder={'Cinema'}/>
            <Input type={'text'} placeholder={'Cont of tickets'}/>
            <Input type={'date'} placeholder={'From'}/>
            <Input type={'date'} placeholder={'To'}/>
            <Button text={"Sign In"}/>
          </form>
      </section>
    )
  }
}

export default FilmFilter;