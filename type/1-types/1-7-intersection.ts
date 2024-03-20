{
  // intersection types : &
  type Student = {
    name: string;
    age: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function interWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeId, person.work());
  }
}
