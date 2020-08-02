### 06\_컨텍스트로 데이터 관리하기

#### 06-1 컨텍스트의 기초 개념 알아보기

- 컨포넌트의 구조와 데이터 흐름 이해하기
- 관찰차 패턴 도입하기
- 공급자와 소비자의 관계
  - 소비자는 공급자보다 낮은 계층에 있어야 함
  - 소비자는 공급자가 제공하는 콜백 함수로 데이터 변경
  - DDAU(Data Down, Action Up)
- 공급자 구현하기
  - 공급자의 자료형(childContextTypes)
  - 데이터 제공 함수(getChildContext())
  - [소스]()
- 소비자를 하이어오더 컴포넌트로 구현하기
- 컴포넌트에서 공급자 분리하기

#### 06-2 컨텍스트 제대로 사용하기

- 중복 공급자 개념 알아보기
- 커링으로 중복 공급자 문제 해결하기
- 여러 공급자를 구독하는 소비자 만들기
- 하이어오더 컴포넌트 조합 충돌 문제 해결하기

#### 06-3 컨텍스트 API 활용하기

- createContext() 함수로 공급자와 소비자 만들기
  ```
  const {provider, consumer} = React.createContext(defaultValue)
  ```
- 컨텍스트 API로 공급자와 소비자 만들기

  - createContext() 함수로 공급자 만들기
    - [소스](../../src/ch06/LoadingProviderWithNewContext.jsx)
  - 한 개의 공급자를 구독하는 세 개의 소비자 만들기
    - [소스](../../src/ch06/ButtonWithNewConsumer.jsx)
    - [스토리](../../src/stories/ContextStory.jsx)

#### 06-4 컨텍스트로 모달 만들기

- 모달 컴포넌트 기본 구조 만들기
  - [모달 박스와 반투명 배경 만들기](../src/ch06/Modal.jsx)
  - [스토리북에서 모달 컴포넌트 출력 확인하기](../src/stories/ModalStory.jsx)
  - [버튼을 누르면 모달 박스가 나타나도록 만들기](../src/ch06/ButtonWithModal.jsx)
  - [스토리북에서 모달 기본 구조와 동작 확인하기](../src/stories/ModalStory.jsx)
- ModalProvider와 소비자가 연결된 Button 컴포넌트 만들기
  - [ModalProvider 만들기](../src/ch06/ModalProvider.jsx)
  - [소비자와 Button 컴포넌트 연결하여 사용하기](../src/stories/ModalStory.jsx)
- ModalProvider 생성 함수로 다양한 모달 구성하기
  - [모달 컨텍스트 생성하기](../src/ch06/ModalContext.jsx)
  - [ModalProvider 생성 함수 만들기](../src/ch06/createModalProvider.jsx)
  - [삭제 컴포넌트 구현하기](../src/ch06/DeleteModalContent.jsx)
  - [모달 본문 목록(ContentMap) 구성하기](../src/ch06/ModalProviderWithKey.jsx)
  - [스토리북에서 수정한 ModalProvider 출력하기](../src/stories/ModalStory.jsx)
  - [삭제 컴포넌트에 소비자 추가하기](../src/ch06/DeleteModalContent.jsx)
  - [회원 가입 컴포넌트 만들기](../src/ch06/CreateMemberModalContent.jsx)
  - [ModalProvider에 전달할 컴포넌트 목록 해시값 추가하기](../src/ch06/ModalProviderWithKey.jsx)
  - [스토리북에서 결과 확인하기](../src/stories/ModalStory.jsx)
- 모달에 데이터 전달하기
  - [데이터 항목 추가하기](../src/ch06/createModalProvider.jsx)
  - [삭제 컴포넌트에 모달 데이터 전달하기](../src/ch06/DeleteModalContent.jsx)
  - [스토리북에서 결과 확인하기](../src/stories/ModalStory.jsx)

#### 06-5 입력 폼 만들며 컨텍스트 복습하기

- [컨텍스트 파일 만들기](../src/ch06/FormContext.jsx)
- [폼 공급자 만들기](../src/ch06/Form.jsx)
- [Input 컴포넌트와 소비자 연결하기](../src/ch06/FormConsumerExample.jsx)
- [전송 버튼을 위한 컴포넌트 만들기](../src/ch06/FormSubmitButton.jsx)
- [스토리북에서 실행해 보기](../src/stories/FormStory.jsx)
