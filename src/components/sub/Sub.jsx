'use strict';

import React from 'react';

class Sub extends React.Component {
  render() {
    return <div className="sub">Sub №:{this.props.num}</div>;
  }
}

module.exports = Sub;