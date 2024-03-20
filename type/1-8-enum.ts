{
  // Enum
  

  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10
  const MONDAY = 0;
  const TUESDAT =1;
  const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAT": 1})
  const dayOfToday = DAYS_ENUM.MONDAY

  // typescript : enum은 타입을 수정해도 에러가 안남 그래서 타입이 제대로 보장이 안됨 -> 유니온으로 대체 가능
  enum Days {
    Monday, 
    Tuesday,
    Wednesday
  }

  console.log(Days.Monday);
}