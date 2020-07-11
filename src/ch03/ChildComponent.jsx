import React from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends React.Component {
  render() {
    const { boolValue, numValue, arrayValue, objValue, nodeValue, funcValue } = this.props;

    return (
      <div>
        <div>불리언값: {boolValue}</div>
        <div>숫자값: {numValue}</div>
        <div>배열값: {arrayValue}</div>
        <div>객체값: {String(objValue)}</div>
        <div>노드값: {nodeValue}</div>
        <div>함수값: {String(funcValue)}</div>
      </div>
    );
  }
}

ChildComponent.propTypes = {
  boolValue: PropTypes.bool,
  numValue: PropTypes.number,
  arrayValue: PropTypes.arrayOf(PropTypes.number),
  objValue: PropTypes.object,
  nodeValue: PropTypes.node,
  funcValue: PropTypes.func,
};

export default ChildComponent;
