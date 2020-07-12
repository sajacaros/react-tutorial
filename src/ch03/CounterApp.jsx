import React from 'react';
import Counter1 from './Counter1';
import Counter2 from './Counter2';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    this.resetCount = this.resetCount.bind(this);
  }

  resetCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }
  render() {
    return (
      <div>
        <Counter1 count={this.state.count} />
        <Counter2 count={this.state.count} />
        <button onClick={this.resetCount}>{this.state.count + 1}로 초기화</button>
      </div>
    );
  }
}

export default App;
