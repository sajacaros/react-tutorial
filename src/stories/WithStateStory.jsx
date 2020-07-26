import React from 'react';
import { storiesOf } from '@storybook/react';

import { CounterWithCountState, CounterWithCountHandler } from '../ch05/withState';
import Counter from '../ch03/Counter1';

storiesOf('WithState', module)
  .addWithJSX('CounterWithCountState', () => <CounterWithCountState />)
  .addWithJSX('CounterWithCountHandler', () => <CounterWithCountHandler />)
  .addWithJSX('CounterWithoutHoC', () => <Counter />);
