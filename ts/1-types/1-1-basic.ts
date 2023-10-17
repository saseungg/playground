{
  /* 
  JavaScript
  - Primitive(원시): number, string, boolean, bigint, symbol, null, undefined
  - Object: function, array
  */

  // number
  const num: number = 1;

  // string
  const str: string = 'hi';

  // boolean
  const boal: boolean = true;

  // undefined (값이 있는지 없는지 결정되지 않은 상태)
  let name: undefined; // 💩
  let age: number | undefined; // (age는 숫자일수도 undefined 일수도 있다.)
  age = undefined;
  age = 1;

  function find(): number | undefined {
    return undefined;
  }

  // null (값이 아예 없음)
  let person: null; // 💩
  let person2: string | null;

  // unknown - 무슨 타입인지 잘모르겠어..라는 의미 & 💩 (안쓰는게 좋음)
  let notSure: unknown = 0;
  notSure: 'he';
  notSure: 'true';

  // any 💩 (안쓰는게 좋음)
  let anything: any = 0;
  anything = 'hello';

  // void (함수에서 아무것도 리턴하지 않을 때)
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 💩

  // never
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // 💩

  // object
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'daon' });
}
