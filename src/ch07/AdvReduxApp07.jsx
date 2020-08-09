import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { setCollection, setAge } from './actions/collectionActions01';
import PresentationComponent from './PresentationComponent';
import ContainerComponent from './containers/ContainerComponent';
import DispatchContainer01 from './containers/DispatchContainer01';

class AdvReduxApp extends PureComponent {
  store = configureStore({ loading: false, name: '두잇 리액트 스터디' });

  componentDidMount() {
    this.store.dispatch(
      setCollection([
        { id: 1, name: 'John', age: 30 },
        { id: 2, name: 'Smith', age: 10 },
      ]),
    );

    this.store.dispatch(setAge(2, 55));

    const { collection } = this.store.getState();
    const { ids, entities } = collection;
    const originPayload = ids.map((id) => entities[id]);
    console.log(originPayload);
  }

  render() {
    return (
      <Provider store={this.store}>
        화면 컴포넌트: <PresentationComponent userName="화면 컴포넌트" />
        <br />
        데이터 컴포넌트: <ContainerComponent id={2} />
        <br />
        액션 데이터 컴포넌트: <DispatchContainer01 />
      </Provider>
    );
  }
}

export default AdvReduxApp;
