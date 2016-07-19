require('./scss/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import Test from './components/test/Test.jsx';

class App extends React.Component {
  render() {
    return <div id="app">
      <Test />
    </div>;
  }
}

ReactDOM.render(<App />, document.getElementById("wrapper"));