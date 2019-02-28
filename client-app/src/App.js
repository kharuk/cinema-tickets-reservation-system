import React, { Component, Fragment } from 'react';
import { BrowserRouter} from 'react-router-dom';
import Main from './containers/Main';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Main /> 
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
