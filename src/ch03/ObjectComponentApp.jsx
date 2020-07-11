import React, { Component } from 'react';
import ObjectComponent from './ObjectComponent';

class App extends Component {
  render() {
    const obj = { name: '제목', age: 30 };
    return <ObjectComponent objValue={obj} />;
  }
}

export default App;
