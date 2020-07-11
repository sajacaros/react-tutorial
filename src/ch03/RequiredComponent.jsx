import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RequiredComponent extends Component {
  render() {
    const { requiredStringValue } = this.props;
    return (
      <div>
        <div>필수값: {requiredStringValue}</div>
      </div>
    );
  }
}

RequiredComponent.propTypes = {
  requiredStringValue: PropTypes.string.isRequired,
};

export default RequiredComponent;
