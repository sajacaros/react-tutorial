import React, { PureComponent } from 'react';
import { createStore } from 'redux';
import { provider } from 'react-redux';

class ReduxApp extends PureComponent {
  store = createStore(
    (state) => state,
    { loading: false, name: '두잇 리액트 스터디' },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  componentDidMount() {
    this.store.dispatch({
      type: 'SET_LOADING',
      payload: true,
    });
  }

  render() {
    return <provider store={this.store}>리덕스 예제</provider>;
  }
}

export default ReduxApp;
