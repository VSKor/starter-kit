'use strict';

require('./test.scss');

class Test {
  constructor(props){
    this.DOMNode = document.createElement("div");
    this.DOMNode.className = 'test';
  }
}

export default Test;