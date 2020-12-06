/*
아래 변수는 "Hello" 라는 문자열, 2020 이라는 숫자, true 라는 boolean 값을 가질 수 있습니다.
이 3 가지를 만족하는 가장 제한된 타입 A 를 만들어서 변수에 설정하세요.
*/

let a = "Hello";

a = 2020;

a = true;

/*
아래 변수 b 를 모두 만족하는 타입 B 를 만들어서 변수에 설정하세요.
b 는 name 을 필수로 가집니다. name 은 문자열입니다.
b 는 name 이외의 모든 프로퍼티를 사용 가능합니다. 해당 프로퍼티는 숫자거나 문자열 입니다.
*/

let b = {
  name: "Mark",
};

b = {
  name: "Mark",
  age: 38,
};

b = {
  name: "Mark",
  country: "Korea",
};

/*
아래 함수 c 는 2가지 형태로 사용이 가능합니다.
첫번째는 문자열을 받아 숫자를 반환하는 것이고,
두번째는 숫자와 숫자 배열을 받아 숫자를 반환하는 것입니다.
c1 과 c2 로 구현했습니다.
c 라는 함수가 두가지 함수를 사용 가능하도록 구현하세요. (힌트 : 오버로딩)
*/

function c1(str: string): number {
  return str.length;
}

function c2(num: number, numArr: number[]): number {
  return num + numArr.reduce((acc, cur) => acc + cur, 0);
}
