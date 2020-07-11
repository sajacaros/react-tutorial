import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildProperty extends Component {
  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}

ChildProperty.propTypes = {
  children: PropTypes.node,
};

export default ChildProperty;
