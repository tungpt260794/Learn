import React from 'react';
import { render } from 'react-dom';

import Test from './test';

class App extends React.Component {
  render() {
    return <p>Hello React! 123 <Test/></p>;
  }
}

render(<App />, document.getElementById("app"));
