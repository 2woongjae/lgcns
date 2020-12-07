/*
Toast 라는 타입은 모두 type 이라는 프로퍼티를 가지고 type 은 다음과 같은 것으로 분류할 수 있다.
"AFTER_SAVED" | "AFTER_PUBLISHED" | "AFTER_RESTORE"
*/

enum ToastType {
  AFTER_SAVED,
  AFTER_PUBLISHED,
  AFTER_RESTORE,
}

interface Toast {
  type: ToastType;
  createdAt: string;
}

const toasts: Toast[] = [];

/*
toasts 안에 여러개의 toast 가 있습니다.
toasts 를 인자로 받아서 각각의 toast 를 문자열로 변환하는 함수를 작성합니다.

각각의 toast 를 문자열로 바꿔 문자열 배열을 리턴하는 것으로 가정하고, 아래의 로직을 작성하세요.

- toasts 를 돌며 toast 를 꺼내서 toast 의 타입이 AFTER_SAVED 인 경우,
"저장 된 직후에 뜬다!!" 라고 문자열을 만들어냅니다.
- toasts 를 돌며 toast 를 꺼내서 toast 의 타입이 AFTER_PUBLISHED 인 경우,
"퍼블리시가 된 직후에 뜬다!!" 라고 문자열을 만들어냅니다.
- toasts 를 돌며 toast 를 꺼내서 toast 의 타입이 AFTER_RESTORE 인 경우,
"복원 된 직후에 뜬다!!" 라고 문자열을 만들어냅니다.

해당 함수를 안전하게 완성해주세요 (ToastType 이 추가된 경우에도 안전하도록 작성해보세요.)
*/

function convert(toasts) {}
