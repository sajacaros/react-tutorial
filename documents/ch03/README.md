### 03\_리액트 컴포넌트

#### 03-1 컴포넌트를 표현하는 JSX

- JSX는 JavaScript XML의 줄임말
  - 자바스크립트에 XML을 추가한 확장형 문법
- JSX 사용해 보기
  - [JSXSample.jsx](../../src/ch03/JSXSample.jsx)
    - JSX는 html이 아니라 xml 규칙을 따르므로 `/>`로 끝남
- JSX와 기존 개발 방법의 차이점 알아보기

  - jsx code

    ```
    ReactDOM.render(
      <App />,
      document.getElementById('root'),
    );
    ```

  - javascript code

    ```
    var img = document.createElement('img');
    img.setAttribute('src', 'http://www.easyspub.co.kr/images/logo_footer.png');
    var divEl = document.createElement('div');
    divEl.innerText = '안녕하세요';
    var welcomEl = document.createElement('div');
    welcomEl.append(img);
    welcomEl.append(divEl);

    var root = document.getElementById('root');
    root.append(welcomEl);
    ```

- JSX의 작동 원리 알아보기
  - 리액트 엔진은 JSX의 XML 구조를 분석하여 자바스크립트 함수 코드로 변환
    - React.createElement() 함수
  - 선언형 화면(Declarative View) 기술

#### 03-2 컴포넌트와 구성 요소

- 컴포넌트의 개념
  - MVC의 뷰를 독립적으로 구성
  - 웹사이트의 화면은 각 요소가 비슷하고 반복적으로 사용됨
    - ![component](https://github.com/sajacaros/react-tutorial/blob/master/documents/ch03/images/component.PNG?raw=true)
- 간단한 컴포넌트 추가하고 화면으로 띄워보기
  - [TodaysPlan 컴포넌트 만들기](../../src/ch03/TodaysPlan.jsx)
- import 문에서 파일 이름의 확장자가 생략된 이유
  - create-react-app은 js나 jsx를 자동으로 찾도록 설정됨
    - webpack module resolution 기능
      - 확장자가 파일 이름에 있는 경우 해당 파일 임포트
      - 확장자가 생략된 경우 확장자 옵션 목록을 보고 파일 임포트
      - 파일이 없으면 같은 이름의 디렉토리를 찾고 index.js나 index.jsx 임포트
- 컴포넌트 구성 요소 미리 살펴보기
  - 프로퍼티
    - 상위 컴포넌트에서 하위 컴포넌트로 전달
    - 읽기 전용 데이터
  - state
    - 컴포넌트의 상태를 저장하고 변경할 수 있는 데이터
  - 컨텍스트
    - 부모 컴포넌트에서 생성하여 모든 자신 컴포넌트에 전달하는 데이트(6장 참고)

#### 03-3 컴포넌트에 데이터를 전달하는 프로퍼티

- 프로퍼티의 기초 알아보기
  - 속성(attribute) 형태로 전달되는 값
  - 상위 컴포넌트
    ```
    class App extends React.Component {
      render() {
        return (
          <div className="body">
            <MyComponent name="message" />
          </div>
        );
      }
    }
    ```
  - 하위 컴포넌트
    ```
    class MyComponent extends React.Compoenent {
      render() {
        const name = this.props.name;
        return <span>{name}</span>;
      }
    }
    ```
- 프로퍼티의 다양한 사용 방법 알아보기
  - console에서 확인 가능
  - 프로퍼티의 자료형 선언
    - [문자혈형 소스](../../src/ch03/PropsComponentApp.jsx)
    - [다양한 프로퍼티 소스](../../src/ch03/ChildComponentApp.jsx)
      - 변수에 객체를 담아 전달하는 방식 선호
    - [불리언 프로퍼티 사용하기](../../src/ch03/BooleanComponentApp.jsx)
    - [객체형 프로퍼티 사용하기](../../src/ch03/ObjectComponentApp.jsx)
    - [필수 프로퍼티 사용하기](../../src/ch03/RequiredComponentApp.jsx)
    - [프로퍼티에 기본값 지정하기](../../src/ch03/DefaultPropsComponentApp.jsx)
    - [자식 프로퍼티 사용하기](../../src/ch03/ChildPropertyApp.jsx)
      - 상위 컴포넌트에서 지정한 하위 컴포넌트의 자식 노드를 하위 컴포넌트에서 프로퍼티로 접근 가능

#### 03-4 컴포넌트 상태 관리하기

- state로 상태 관리하기

  - state : 값을 변경할 수 있는 객체
  - 버튼을 클릭하거나 값을 입력하는 이벤트와 함께 사용됨
  - [소스](../../src/ch03/StateExampleApp.jsx)
  - state를 사용할 때 주의할 점
    - 생상자에서 반드시 초기화해야 함
    - state 값을 변경할 때는 setState() 함수 사용
      - 콤포넌트 라이프 사이클을 리액트 엔진이 정하기 때문
    - setState() 함수는 비동기 처리
    - setState() 코드 이후로 연결된 함수들의 실행이 완료되는 시점에 화면 동기화됨
  - [setState() 함수에 함수 전달하기](../../src/ch03/StateExampleApp2.jsx)
    - state에서 이전 상태값을 가져올 필요 없이 함수 인자로 제공됨

- 클래스 인스턴스 변수와 forceUpdate() 함수로 state 관리하기
  - 리액트 엔진의 라이프사이클과 관계없이 출력하고 싶다면
    - state를 직접 변경후 forceUpdate() 함수 호출
    - 비추
  - [소스](../../src/ch03/ForceUpdateExample.jsx)

#### 03-5 컴포넌트의 생명주기

- 생명주기 함수 살펴보기
  - ![](https://github.com/sajacaros/react-tutorial/blob/master/documents/ch03/images/reactLifeCycle.PNG?raw=true)
  - 총 8개의 함수
    - constructor(props) 함수
      - 맨 처음에 생성될 때 한번만 호출
      - super() 함수를 가장 위에 호출
    - render() 함수
      - render() 함수가 반화하는 JSX를 화면에 그려줌
    - static getDerivedStateFromProps(pros,state) 함수
      - 상위 컴포넌트에서 전달받은 프로퍼티로 state값을 연동할 때 주로 사용
    - componentDidMount() 함수
      - 컴포넌트가 화면에 모두 표현된 이후 해야할 작업 수행
    - shouldComponentUpdate(nextProps, nextState) 함수
      - 화면을 새로 출력해야 하는지 판단하는 함수
      - forceUpdate() 함수를 호출하여 화면을 출력하면 이 함수는 호출되지 않음
    - getSnapshotBeforeUpdate(prevProps, prevState) 함수
      - 컴포넌트의 변경된 내용이 가상 화면에 완성된 이후 호출되는 함수
      - DOM 정보에 접근할 때 사용
    - componentDidUpdate(prevProps, prevState, snapshot) 함수
      - DOM 정보를 변경할 때 사용
    - componentWillUnmount() 함수
      - 소멸되기 직전 호출되는 함수
- [생명주기 함수의 실행 과정 살펴보기](../../src/ch03/lifeCycle.jsx)
  - 생성 주기
    - ![](https://github.com/sajacaros/react-tutorial/blob/master/documents/ch03/images/createCycle.PNG?raw=true)
  - 갱신 과정
    - ![](https://github.com/sajacaros/react-tutorial/blob/master/documents/ch03/images/updateCycle.PNG?raw=true)
  - 소멸 과정
    - ![](https://github.com/sajacaros/react-tutorial/blob/master/documents/ch03/images/deleteCycle.PNG?raw=true)
- 카운터 프로그램 만들며 생명주기 함수 사용해 보기
  - [소스](../../src/ch03/CounterApp.jsx)

#### 03-6 클래스형 컴포넌트

- Component 알아보기
- PureComponent 알아보기

#### 03-7 함수형 컴포넌트

- 함수형 컴포넌트의 구조 알아보기

#### 03-8 배열 컴포넌트

- 배열 컴포넌트를 위한 map() 함수 사용 방법
- map() 함수 사용하여 배열 컴포넌트 출력하기
- render() 함수에서 여러 개의 JSX 노드 반환하기

#### 03-9 컴포넌트에서 콜백 함수와 이벤트 처리하기

- 콜백 함수로 프로퍼티 수정해 보기
- bind() 함수로 this 범위 오류 해결하기
- 컴포넌트에서 DOM 객체 함수 사용하기
- 컴포넌트에서 DOM 이벤트 사용하기
- 단방형 흐름 방식 개념 정리

#### 03-10 Input 컴포넌트 만들면서 복습하기
