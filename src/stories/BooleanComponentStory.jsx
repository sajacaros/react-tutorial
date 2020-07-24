import React from 'react';
import { storyOf, storiesOf } from '@storybook/react';

import BooleanComponent from '../ch03/BooleanComponent';

storiesOf('BooleanComponent', module)
  .add('기본 설정', () => <BooleanComponent />)
  .add('bored 설정', () => <BooleanComponent bored />);
