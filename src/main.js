require('./scss/main.scss');

import Test from './components/test/Test';

class CTest extends Test {
  constructor(props){
    super(props);

    this.DOMNode.innerHTML = 'test';
  }
}

var newTest = new CTest;

document.body.appendChild(newTest.DOMNode);