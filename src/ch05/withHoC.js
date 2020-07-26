import React from 'react';

export default function withHoC(WrappedComponent) {
  return class WithHoC extends React.Component {
    static displayName = `withHoC(${WrappedComponent.name})`;
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
