'use strict';

require('./test.scss');

import React from 'react';

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      c: 0
    }
  }

  render() {
    this.state.c += 1;
    return <div className="test">react-hot Test {this.state.c}</div>;
  }
}

export default Test;