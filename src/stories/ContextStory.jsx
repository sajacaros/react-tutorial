import React from 'react';
import { storiesOf } from '@storybook/react';
import HomePageComponent from '../ch06/HomePageComponent';
import HomePageWithProvider from '../ch06/HomePageWithProvider';

storiesOf('HomePageContext', module)
  .addWithJSX('컨텍스트 예제', () => <HomePageComponent />)
  .addWithJSX('Provider 예제', () => <HomePageWithProvider />);
