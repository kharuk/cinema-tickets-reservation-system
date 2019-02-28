import React,{ Component } from 'react';
import NavPanel from './NavPanel';
import './header.scss';

class Header extends Component{

    render(){
      return(
          <div className="header">
            <NavPanel loggedIn={this.props.loggedIn}/>
          </div>
      );
    }   
}

export default Header;