/*
class 의 method 에 decorator 를 사용해서 해당 class 의 this 를 자동으로 바인딩할 수 있습니다.

아래의 Timer 는 new Timer().start(); 를 이용해서 실행하면, NaN 이 출력됩니다.
_loop 메서드의 위에 @autobind 를 달아 정상적으로 출력되도록 autobind 함수를 작성하세요.
*/

function autobind() {}

class Timer {
  private _count = 0;
  private _timer: number | null = null;

  public start() {
    this._timer = setInterval(this._loop, 1000);
  }

  public stop() {
    if (this._timer !== null) {
      clearInterval(this._timer);
      this._count = 0;
    }
  }

  // @autobind
  private _loop() {
    console.log(this._count++);
  }
}

new Timer().start();
