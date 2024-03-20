{
  // type inference -> 타입 추론

  let text = 'hi';

  // 인자는 any로 자동 추론되기 때문에 인자는 타입을 명시해주는 것이 좋음
  function print(message: string) {
    console.log(message);
  }

  function add(x: number, y: number) {
    return x + y;
  }

  
}
