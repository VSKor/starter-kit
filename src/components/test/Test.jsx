'use strict';

require('./test.scss');

import React from 'react';

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      c: 0,
      subs: []
    }
  }

  subTest() {
    var newSub;
    require.ensure([], function (require) {
      var Sub = require('../sub/Sub.jsx');
      this.setState({subs: [...this.state.subs, <Sub num={this.state.subs.length} key={this.state.subs.length}/>]});
    }.bind(this));
  }

  render() {
    this.state.c += 1;
    return <div className="test" onClick={this.subTest.bind(this)}>
      react-hot Test {this.state.c}
      <div className="subs">{this.state.subs}</div>
    </div>;
  }
}

export default Test;