require('./scss/main.scss');

import React from 'react';
import {render} from 'react-dom';

import Test from './components/test/Test.jsx';

class App extends React.Component {
  render(){
    return <div id="app">
      <Test />
    </div>;
  }
}

render(<App />, document.getElementById("wrapper"));