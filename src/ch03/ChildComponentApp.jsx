import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class App extends Component {
  render() {
    const array = [1, 2, 3];
    const obj = { name: '제목', age: 30 };
    const node = <h1>노드</h1>;
    const func = () => {
      console.log('메시지');
    };
    return (
      <ChildComponent
        booValue={true}
        numValue={1}
        arrayValue={array}
        objValue={obj}
        nodeValue={node}
        funcValue={func}
      />
    );
  }
}

export default App;
