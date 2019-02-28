import React,{ Component } from 'react';
import NavPanel from './NavPanel';
import './header.scss';

class Header extends Component{

    render(){
      return(
          <div className="header">
            <NavPanel/>
          </div>
      );
    }   
}

export default Header;