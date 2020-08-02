import React from 'react';

const { Provider, Consumer } = React.createContext({});

export { Consumer };

export default class LoadingProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.setLoading = this.setLoading.bind(this);
  }

  setLoading(key, value) {
    this.setState({ [key]: value });
  }

  render() {
    const context = {
      ...this.state,
      setLoading: this.setLoading,
    };

    return <Provider value={context}>{this.props.children}</Provider>;
  }
}
