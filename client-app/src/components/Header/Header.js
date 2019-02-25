import React,{ Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import NavPanel from './NavPanel';
import Login from '../Authentication/Login'
import Register from '../Authentication/Register'
import './header.scss';

class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
      return(
          <div className="header">
            <div className="wrap">
              <NavPanel/>
              <Switch>
                <Route
                  exact
                  path="/sign-in"
                  component={Login}
                />
                <Route 
                  path="/sign-up" 
                  component={Register} 
                />
                {/*<Route exact path="/" component={(props) => <HomePage {...props} />} />*/}       
              </Switch>
            </div>
          </div>
      );
    }   
}

export default withRouter(Header);