import React from 'react';
import { storiesOf } from '@storybook/react';

import ReduxApp01 from '../ch07/ReduxApp01';
import ReduxApp02 from '../ch07/ReduxApp02';
import ReduxApp03 from '../ch07/ReduxApp03';
import AdvReduxApp01 from '../ch07/AdvReduxApp01';
import AdvReduxApp02 from '../ch07/AdvReduxApp02';
import AdvReduxApp03 from '../ch07/AdvReduxApp03';
import AdvReduxApp04 from '../ch07/AdvReduxApp04';
import AdvReduxApp05 from '../ch07/AdvReduxApp05';
import AdvReduxApp06 from '../ch07/AdvReduxApp06';
import AdvReduxApp07 from '../ch07/AdvReduxApp07';
import AdvReduxApp08 from '../ch07/AdvReduxApp08';

storiesOf('Redux', module)
  .addWithJSX('createStore', () => <ReduxApp01 />)
  .addWithJSX('dispatch() 사용해보기', () => <ReduxApp02 />)
  .addWithJSX('reducer 추가', () => <ReduxApp03 />)
  .addWithJSX('reducer 분리', () => <AdvReduxApp01 />)
  .addWithJSX('action 분리', () => <AdvReduxApp02 />)
  .addWithJSX('그래프DB 적용', () => <AdvReduxApp03 />)
  .addWithJSX('payload 읽기', () => <AdvReduxApp04 />)
  .addWithJSX('payload 수정', () => <AdvReduxApp05 />)
  .addWithJSX('화면,데이터 컴포넌트', () => <AdvReduxApp06 />)
  .addWithJSX('데이터 컴포넌트에 액션 연결', () => <AdvReduxApp07 />)
  .addWithJSX('5개의 액션 연결', () => <AdvReduxApp08 />);
