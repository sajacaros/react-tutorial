import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { setCollection } from './actions/collectionActions01';

class AdvReduxApp extends PureComponent {
  store = configureStore({ loading: false, name: '두잇 리액트 스터디' });

  componentDidMount() {
    this.store.dispatch(
      setCollection([
        { id: 1, name: 'John', age: 30 },
        { id: 2, name: 'Smith', age: 10 },
      ]),
    );

    const { collection } = this.store.getState();
    const { ids, entities } = collection;
    const originPayload = ids.map((id) => entities[id]);
    console.log(originPayload);
  }

  render() {
    return <Provider store={this.store}>리덕스 예제</Provider>;
  }
}

export default AdvReduxApp;
