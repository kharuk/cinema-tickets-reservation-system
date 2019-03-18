import React, { Component} from 'react';
import { BrowserRouter} from 'react-router-dom';
import Main from './Main';
import { history } from '../store/';

class App extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
          <Main /> 
      </BrowserRouter>
    );
  }
}

export default App;
