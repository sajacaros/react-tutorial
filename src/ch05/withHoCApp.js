import React, { PureComponent } from 'react';
import Button from '../ch04/Button';
import Text from '../ch04/Text';
import withHoC from './withHoC';

const ButtonWithHoC = withHoC(Button);
const TextWithHoC = withHoC(Text);
class App extends PureComponent {
  render() {
    return (
      <>
        <ButtonWithHoC>전송하자</ButtonWithHoC>
        <TextWithHoC>hello HoC</TextWithHoC>
      </>
    );
  }
}
export default App;
