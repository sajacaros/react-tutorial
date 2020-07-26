import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../ch04/Button';
import Text from '../ch04/Text';
import withLoading from '../ch05/withLoading';

const ButtonWithLoading = withLoading(<Button disabled>로딩중...</Button>)(Button);
const TextWithLoading = withLoading('로딩중')(Text);

storiesOf('WithLoading', module)
  .addWithJSX('기본 설정', () => (
    <div>
      <ButtonWithLoading>안녕하세요</ButtonWithLoading>
      <TextWithLoading>안녕하세요</TextWithLoading>
    </div>
  ))
  .addWithJSX('isLoading 예제', () => (
    <div>
      <ButtonWithLoading isLoading>안녕하세요</ButtonWithLoading>
      <TextWithLoading isLoading>안녕하세요</TextWithLoading>
    </div>
  ));
