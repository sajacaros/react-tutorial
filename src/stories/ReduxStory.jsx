import React from 'react';
import { storiesOf } from '@storybook/react';

import ReduxApp01 from '../ch07/ReduxApp01';
import ReduxApp02 from '../ch07/ReduxApp02';
import ReduxApp03 from '../ch07/ReduxApp03';
storiesOf('Redux', module)
  .addWithJSX('createStore', () => <ReduxApp01 />)
  .addWithJSX('dispatch() 사용', () => <ReduxApp02 />)
  .addWithJSX('reducer 사용', () => <ReduxApp03 />);
