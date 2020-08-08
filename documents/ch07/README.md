### 07\_리덕스로 데이터 관리하기

#### 07-1 리덕스의 기초 알아보기

- 스토어를 중심으로 리덕스 개념 알아보기
  ![리덕스 스토어](./images/reduxWithStore.PNG)
- 리덕스와 컨테스트 중 무엇을 사용해야 할까? -프로퍼티
  - 상위 컴포넌트에서 하위 컴포넌트로 전달되는 읽기 전용 데이터
  - state
    - 컴포넌트의 상태를 저장하고 변경할 수 있는 데이터
  - 컨텍스트
    - 부모 컴포넌트에서 생성하여 모든 자식 컴포넌트에 전달하는 데이터
  - 리덕스
    - 서버에서 받은 데이터를 앱 전체에 전달하거나 관리
- 리덕스는 어떻게 동작할까?
  ![리덕스 다이어그램](./images/reduxDiagram.gif)
  - 컴포넌트는 손님
  - dispatch(), connect() 함수는 종업원
  - 액션은 주문서
  - 리듀서는 요리사
- 리덕스 개발 준비하기
  - 리덕스 설치하기
    ```
    yarn add redux react-redux
    ```
  - 리덕스 크롬 확장 도구 설치하기
  - 크롬의 개발자 도구 확인
  - 리덕스 개발자 도구 설치하기
    ```
    yarn add redux-devtools-extension --dev
    ```
- 리덕스로 빈 스토어 생성해 보기

  - 스토어 생성하기
    ```
    createStore(reducer, /* initial state */, /* enhancer */)
    ```
    - [소스](../../src/ch07/ReduxApp01.jsx)
    ```
    class ReduxApp extends PureComponent {
      store = createStore(
        (state) => state,
      );
      render() {
        return <provider store={this.store}>리덕스 예제</provider>;
      }
    }
    ```
  - 리덕스 크롬 확장 도구 확인하기
  - 리덕스 개발자 도구 연동하기
    ```
    class ReduxApp extends PureComponent {
      store = createStore(
        (state) => state,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      );
      render() {
        return <provider store={this.store}>리덕스 예제</provider>;
      }
    }
    ```
  - 스토어 데이터 확인해 보기

- 리덕스로 채워진 스토어 생성해 보기

  - 스토어에 스토어 데이터 설정해 보기

    ```
    class ReduxApp extends PureComponent {
      store = createStore(
        (state) => state,
        { loading: false, name: '두잇 리액트 스터디' },
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      );

      render() {
        return <provider store={this.store}>리덕스 예제</provider>;
      }
    }
    ```

#### 07-2 액션과 리듀서의 관계 알아보기

- 액션 알아보기
  - { type: ..., payload: ... } 구조로 된 객체
    - type
      - 액션이 어떤 작업인지에 대한 고유값
      - type 키워드 변경 불가
    - payload
      - 스토어에서 사용될 값
      - payload 키워드 변경 가능
      - 생략 가능
  ```
  {
    type: 'SET_LOADING',
    payload: true,
  }
  {
    type: 'SET_USER',
    payload: { name: 'Park', age: 20 }
  }
  {
    type: 'RESET_LOADING'
  }
  ```
- 리듀서 알아보기
  ```
  function reducer(state, action) { return state; }
  const reducer = (state, action) => state + action.payload;
  ```
  - 리듀서가 반환하는 값의 자료형은 스토어의 이전 데이터와 동일해야 함
- dispatch() 함수 알아보기

  - 액션은 dispatch() 함수를 통해 리듀서로 전달
  - [소스](../../src/ch07/ReduxApp02.jsx)

  ```
  class ReduxApp extends PureComponent {
    store = createStore(
      (state) => state,
      { loading: false, name: '두잇 리액트 스터디' },
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );

    componentDidMount() {
      this.store.dispatch({
        type: 'SET_LOADING',
        payload: true,
      });
    }

    render() {
      return <provider store={this.store}>리덕스 예제</provider>;
    }
  }
  ```

- 리듀서 구현하고 실행해 보기

  - SET_LOADING 리듀서 구현하기

    - [소스](../../src/ch07/ReduxApp03.jsx)

    ```
    const reducer = (state, action) => {
      const { type, payload } = action;
      switch (type) {
        case 'SET_LOADING': {
          return {
            ...state,
            loading: payload,
          };
        }
        default:
          return state;
      }
    };

    class ReduxApp extends PureComponent {
      store = createStore(
        reducer,
        { loading: false, name: '두잇 리액트 스터디' },
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      );

      componentDidMount() {
        this.store.dispatch({
          type: 'SET_LOADING',
          payload: true,
        });
      }

      render() {
        return <provider store={this.store}>리덕스 예제</provider>;
      }
    }
    ```

  - 리듀서 수정하기
  - 크롬 리덕스 확장 도구에서 추가 액션 항목 확인하기
  - 액션 목록 눌러보며 단게별 스토어 결과 확인하기

- 리듀서 분리하기
  - loading 관련 리듀서 분리하기
  - user 관련 리듀서 분리하기
  - 리듀서 묶어주기
  - 스토어 설정 파일 만들기
  - 리액트 앱 다시 구성하기
  - 분리된 리듀서 수정하기
  - loading 리듀서 반환값 재구성하기
  - user 리듀서 반환값 재구성하기
- 액션 분리하기
  - loading 액션 분리하기
  - 익스포트한 액션 타입을 리듀서에 적용하기
  - 리액트 앱 수정하기
  - user 액션 분리하고 리듀서, 앱에 수정하기

#### 07-3 그래프 데이터베이스 도입하기

- 그래프 데이터베이스를 소개합니다
- 객체 배열 형태의 자료를 스토어에 저장하도록 앱 수정하기
  - 액션 추가하기
  - dispatch() 함수에서 액션 전달하고 앱 실행
  - 그래프 DB 구조 만들기
  - reduce()를 함수로 객체 배열 자료를 객체 형태로 변환하기
  - index.js에 리듀서 추가하기
  - 리듀서 실행 확인하기
- 스토어에 저장된 데이터 읽어 들이기(그래프 DB 읽어 들이기)
  - 스토어 읽어 들이기
- 그래프 DB 수정하기
  - 그래프 DB 수정에 대한 액션 추가하기
  - 리듀서에 그래프 DB 자료 수정하는 코드 추가하기
  - 리듀서 추가하고 그래프 DB 수정 확인해 보기

#### 07-4 데이터를 위한 컴포넌트 알아보기

- 화면 컴포넌트와 데이터 컴포넌트 구분하기
- 데이터 컴포넌트와 화면 컴포넌트 출력해 보기
  - 화면 컴포넌트 만들기
  - connect() 함수로 데이터 컴포넌트 생성하기
  - 데이터 컴포넌트 출력하기
- 데이터 컴포넌트에 액션 연결하기
  - 화면 컴포넌트 작성하기
  - 데이터 컴포넌트 작성하기
  - 액션 실행 확인하기
  - mapDispatchToProp() 함수에서 dispatch 인자 생략하기
  - 5개의 액션 추가하기
  - 액션 함수 컴포넌트에 연결하기
  - 버튼을 눌러 동작 확인

#### 07-5 검색 기능 만들면서 리덕스 복습하기

- 검색을 위한 검색 입력 항목 저장하기
  - 액션 구성하기
  - 리듀서 구현하기
  - 리듀서를 스토어에 추가하기
- 검색창 만들기
  - 데이터 컴포넌트 만들기
  - 리덕스 앱에 검색창 추가하기
- 검색 결과 목록 만들기
  - 화면 컴포넌트 만들기
  - 데이터 컴포넌트 만들기
  - 리덕스 앱에 연동하기
