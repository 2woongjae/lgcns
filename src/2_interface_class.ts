/*
아래 조건을 만족하는 ICar 인터페이스와 Volvo 클래스를 작성하세요.
- 해당 조건을 제외하고는 사용할 수 없도록 컴파일 에러를 발생시키는 것에 주의해야 합니다.
- 아래 예시 중 주석 부분은 로그로 출력되는 내용입니다. 일치하도록 로직을 작성하세요.
- 아래 예시 중 [컴파일 에러!!] 가 나는 경우는 해당 동작을 할 수 없도록 해야합니다.
- 필요한 경우, 추가로 타입을 만들어도 좋습니다.
*/

interface ICar {}

class Volvo implements ICar {}

const myCar: ICar = new Volvo("suv");

console.log(myCar.type, myCar.isStated); // 'suv' false
myCar.open("lf"); // '좌측 앞쪽 문이 열린다.'
console.log(myCar.doorOpenState); // { lf: true, rf: false, lb: false, rb: false }
myCar.doorOpenState.lf = false; // [컴파일 에러!!]
myCar.closeAllDoors();
console.log(myCar.doorOpenState); // { lf: false, rf: false, lb: false, rb: false }
myCar.start(); // '차가 출발한다.'
console.log(myCar.isStated); // true
