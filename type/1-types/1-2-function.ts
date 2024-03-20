{
  function jsAdd(num1: number, num2: number): number {
    return num1 + num2;
  }

  jsAdd(1, 2);

  function fetchNum(id: number): Promise<number> {
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  function printName(firstName: string, lastName?: string) {
    return firstName + lastName;
  }

  function printMessage(message: string = 'default message') {
    console.log(message);
  }

  // 스프래드 문법 (매개변수를 배열로 받을 수 있음)
  function addNumber(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
}
