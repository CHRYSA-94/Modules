//Exercise 1
import People from "./export.js"

//Execise 3
import {printName as printFirstName, printAge as printDOB} from "./export.js"

//Exercise 5
import Teacher from "./teacher.js"

//Exercise 2
const user = new People("Chrysa", 26);
console.log(user.printName())
console.log(user.printAge())

//Exercise 3
printFirstName(user);
printDOB(user)

//Exercise5 
const teacher = new Teacher( "Anna", 10)
console.log(teacher.walk())
console.log(teacher)
