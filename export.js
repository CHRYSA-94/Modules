  export default class User {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    printName() {
      console.log(this.name);
    }
  
    printAge() {
      console.log(this.name);
    }
  }
  
  
  export function printName(user) {
    console.log(`User's name is ${user}`);
  }
  
  export function printAge(age) {
    console.log(`User's age is ${age}`);
  }
  