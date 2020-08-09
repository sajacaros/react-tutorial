import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

class AdvReduxApp extends PureComponent {
  store = configureStore({ loading: false, name: '두잇 리액트 스터디' });

  componentDidMount() {
    this.store.dispatch({
      type: 'SET_LOADING',
      payload: true,
    });

    this.store.dispatch({ type: 'RESET_LOADING' });
    this.store.dispatch({ type: 'SET_USER', payload: { name: 'Kim', age: 20 } });
  }

  render() {
    return <Provider store={this.store}>리덕스 예제</Provider>;
  }
}

export default AdvReduxApp;
