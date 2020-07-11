import React, { Component } from 'react';

class BooleanComponent extends Component {
  render() {
    const message = this.props.bored ? '놀러 가자' : '발표 준비하자';
    return <div className="message-container">{message}</div>;
  }
}

export default BooleanComponent;
