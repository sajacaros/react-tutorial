import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ObjectComponent extends Component {
  render() {
    const { objValue } = this.props;
    return (
      <div>
        <div>객체값: {String(Object.entries(objValue))}</div>
      </div>
    );
  }
}

ObjectComponent.propTypes = {
  objValue: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
};

export default ObjectComponent;
