/*
state 는 읽을 수만 있고, 변경을 하려면 새로 데이터를 만들어야 하는 전형적인 immutable data 입니다.
아래 상태에서는 내부 데이터가 변경이 가능합니다.
예를 들어, state1.books[0].title = "새 책 이름"; 과 같이 변경이 가능합니다.

컴파일 타임에 변경이 불가능하도록 DeepReadonly<T> 라는 타입을 만들어보세요.
(어떠한 State 에도 대응이 가능하도록 범용적인 타입을 만들어보세요.)
*/

const state = {
  books: [{ title: "책 이름", author: "저자" }],
};
