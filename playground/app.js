// this is still an object, not a class
class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    return 'Hi ' + this.firstname;
  }
}

var john = new Person('John', 'Doe');
console.log(john);

class InformalPerson extends Person {
  constructor(firstname, lastname) {
    super(firstname, lastname);
  }

  greet() {
    return 'Yo ' + this.firstname;
  }
}

var jane = new InformalPerson('Jane', 'Doe');
console.log(jane);
