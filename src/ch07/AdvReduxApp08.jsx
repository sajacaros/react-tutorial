import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import PresentationComponent from './PresentationComponent';
import ContainerComponent from './containers/ContainerComponent';
import DispatchContainer03 from './containers/DispatchContainer03';

class AdvReduxApp extends PureComponent {
  store = configureStore({ loading: false, name: '두잇 리액트 스터디' });
  render() {
    return (
      <Provider store={this.store}>
        화면 컴포넌트: <PresentationComponent userName="화면 컴포넌트" />
        <br />
        데이터 컴포넌트: <ContainerComponent id={2} />
        <br />
        액션 데이터 컴포넌트: <DispatchContainer03 />
      </Provider>
    );
  }
}

export default AdvReduxApp;
