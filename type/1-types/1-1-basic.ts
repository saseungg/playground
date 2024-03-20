{
  const num: number = 1;

  const str: string = 'st';

  const boal: boolean = false;

  let age: number | undefined;

  let person: string | null;

  let notSure: unknown = 0; // 어떤 타입인지 잘 모르는 타입 => 잘 안쓰긴함

  let anything: any = 3;

  function print():void {
    console.log(3);
  }

  /*  아무것도 리턴하지 않을 때 void타입 
  리턴하는 함수가 있다면 타입을 명시해주는것이 좋다.
  */

  //never는 절대 리턴값이 없다는 의미 (아래와 같이 에러를 던져서 서버가 죽는 경우에 절대 리턴값이 발생할 일이 없을때 사용)
  function throwError(message: string):never {
    throw new Error(message); 
  }

  // 원시타입을 제외한 모든 object타입을 받을 수있음 (범위가 넓기 때문에 잘 쓰지 않음)
  let obj: object;

}
