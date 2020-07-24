import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class App extends Component {
  render() {
    return (
      <>
        <Input label="name" name="name" type="text" onFocus />
      </>
    );
  }
}

export default App;
