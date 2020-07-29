import React, { PureComponent } from 'react';

import { CounterWithCountState, CounterWithCountHandler } from '../ch05/withState';

class App extends PureComponent {
  render() {
    return (
      <>
        <CounterWithCountState />
        <CounterWithCountHandler />
      </>
    );
  }
}
export default App;
