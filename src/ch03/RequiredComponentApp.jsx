import React, { Component } from 'react';
import RequiredComponent from './RequiredComponent';

class App extends Component {
  render() {
    return <RequiredComponent requiredStringValue="hello" />;
  }
}

export default App;
