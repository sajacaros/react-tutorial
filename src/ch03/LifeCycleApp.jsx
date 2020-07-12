import React from 'react';
import LifeCycle from './LifeCycle';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasDestoryed: false };
  }
  // componentDidMount() {
  //   this.setState({ hasDestoryed: true });
  // }
  render() {
    return (
      <div>
        <div>{this.state.hasDestoryed ? null : <LifeCycle />}</div>
      </div>
    );
  }
}

export default App;
