import React, { Component } from 'react';
import ChildProperty from './ChildProperty';

class App extends Component {
  render() {
    return (
      <div>
        <ChildProperty>
          <div>
            <span>μμ λΈλ</span>
          </div>
        </ChildProperty>
      </div>
    );
  }
}

export default App;
