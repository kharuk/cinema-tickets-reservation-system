import React,{ Component } from 'react';
import { withRouter } from 'react-router-dom';
import NavPanel from './NavPanel';
import Login from '../Authentication/Login'

class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
      return(
          <div className="header">
            <div className="wrap">
              <NavPanel/>
              <Login/>
            </div>
          </div>
      );
    }   
}

export default withRouter(Header);