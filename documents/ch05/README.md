### 05\_하이어오더 컴포넌트

#### 05-1 커링과 조합 개념 공부하기

- 커링
  - 반환값이 함수인 디자인 패턴
  - 중복된 코드를 반복적으로 입력하지 않고 원하는 기능을 조합하여 적재적소에 사용
  - [예제](../../src/ch05/currying.js)
  ```
  const fomula = x => addFour(multiplyThree(multiplyTwo(x)));
  ```
  - 코드가 역순으로 읽힘
  - reduce() 함수를 이용하여 [compse 함수](../../src/ch05/compose.js) 구현
- 실무에서 사용하는 함수 조합 기법

  - arguments를 사용하여 배열 인자 대신 나열형 인자로 함수 구조를 유연하게 만들기
    ```
    function compose() {
      const funcArr = Array.prototype.slice.call(arguments);
      return funcArr.reduce(
        function(prevFunc, nextFunc){
          return function(value) {
            return nextFunc(prevFunc(value));
          }
        },
        function(k) { return k; }
      );
    }
    ```
    - 인자를 1개만 받을 수 있음
  - arguments를 활용하여 value 단일 인자를 다중 인자로 확장하기
    - apply() 함수를 이용
    ```
    function compose() {
      const funcArr = Array.prototype.slice.call(arguments);
      return funcArr.reduce(
        function(prevFunc, nextFunc){
          return function() {
            const args = Array.prototype.slice.call(arguments);
            return nextFunc(prevFunc.apply(null, value));
          }
        },
        function(k) { return k; }
      );
    }
    ```
  - 전개 연산자로 더 간결하게 만들기
    ```
    function compse(...funcArr) {
      return funcArr.reduce(
        function( prevFunc, nextFunc ) {
          return function(...args) {
            return nextFunc(prevFunc(...args));
          }
        },
        function(k) {
          return k;
        }
      )
    }
    ```
  - 함수 조합 실행하기

    ```
    const formulaWithCompose = compse(
      multiplyTwo,
      multiplyThree,
      addFour
    );
    const formulaWithCompose2 = compose(
      multiplyX(2),
      addX(5),
      muliplyX(3),
      addX(4)
    );

    const x = 10;
    formulaWithCompose(x);
    formulaWithCompose(x);
    ```

#### 05-2 하이어오더 컴포넌트 기초 개념 공부하기

- 데코레이터 패턴
  - 클래스 간의 종속성 없이 기능만을 공유
- 하이어오더 컴포넌트는 함수나 클래스 형태의 컴포넌트를 반환할 수 있음
  - 생명주기 함수를 확장해야할 경우에는 클래스형 컴포넌트를 반환
  - 함수형 컴포넌트
    ```
    function higherOrderComponent(Component) {
      return function Enhanced(props) {
        return <Component {...props} />;
      }
    }
    ```
  - 클래스형 컴포넌트
    ```
    function higherOrderComponent(Component) {
      return class Enhanced extends React.Component {
        render() {
          return <Component {...this.props} />;
        }
      }
    }
    ```
  - 하이어오더 컴포넌트와 확장 컴포넌트의 이름은 with로 시작(암묵룰)
  - [예제](../../src/stories/WithHoCStory.jsx)

#### 05-3 하이어오더 컴포넌트 라이브러리 사용하기

- recompose 라이브러리 설치
- branch() 함수
- withState() 함수
- lifecycle() 함수

#### 05-4 다중 하이어오더 컴포넌트 사용하기

#### 05-5 필수 입력 항목 표시 기능 추가하며 하이어오더 컴포넌트 복습하기
