import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route path="/" component={Header}/>  
       {/*
      <Route path="/" component={Body}/>
      <Route path="/" component={Footer}/>*/ }   
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
