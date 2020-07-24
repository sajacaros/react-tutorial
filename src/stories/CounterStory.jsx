import React from 'react';
import { storiesOf } from '@storybook/react';

import Counter2 from '../ch03/Counter2';

storiesOf('Counter', module).add('counter', () => <Counter2 count={0} />);
