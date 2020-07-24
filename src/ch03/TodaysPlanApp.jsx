import React, { Component } from 'react';
import '../App.css';
import TodaysPlan from './TodaysPlan';

class App extends Component {
  render() {
    return (
      <div className="body">
        <TodaysPlan />
        <TodaysPlan />
        <TodaysPlan />
        <TodaysPlan />
        <TodaysPlan />
      </div>
    );
  }
}

export default App;
