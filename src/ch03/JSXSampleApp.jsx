import React from 'react';

class App extends React.Component {
  render() {
    return (
      // 아래의 내용이 JSX 양식 입니다.
      <div>
        {/* img에 />가 없으면 에러 */}
        <img src="http://www.easyspub.co.kr/images/logo_footer.png" />
        <div>안녕하세요</div>
      </div>
    );
  }
}
export default App;
