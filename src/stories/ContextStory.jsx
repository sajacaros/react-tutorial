import React from 'react';
import { storiesOf } from '@storybook/react';
import HomePageComponent from '../ch06/HomePageComponent';
import HomePageWithProvider from '../ch06/HomePageWithProvider';
import HomePageWithTwoProvider from '../ch06/HomePageWithTwoProvider';
import ButtonWithNewConsumer from '../ch06/ButtonWithNewConsumer';
import LoadingProviderWithNewContext from '../ch06/LoadingProviderWithNewContext';

storiesOf('HomePageContext', module)
  .addWithJSX('컨텍스트 예제', () => <HomePageComponent />)
  .addWithJSX('Provider 예제', () => <HomePageWithProvider />)
  .addWithJSX('이중 Provider 예제', () => <HomePageWithTwoProvider />)
  .addWithJSX('context api 예제', () => (
    <LoadingProviderWithNewContext>
      <ButtonWithNewConsumer label="hello" />
    </LoadingProviderWithNewContext>
  ));
