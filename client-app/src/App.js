import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
           <Route path="/" component={Header}/>  
      {/*
      <Route path="/" component={Body}/>
      <Route path="/" component={Footer}/>*/ }   
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
