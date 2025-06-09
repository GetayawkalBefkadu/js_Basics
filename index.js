//My first javascript code!
    console.log("Hello world!");
    // variables declaration
let name = 'Getch';// string 
console.log(`Hello ${name}!`);
let age = 24; // number
console.log(`I am ${age} years old!`);
//data types
let isStudent = true; // boolean  
console.log(`Am I a student? ${isStudent}`); 
const PI = 3.14; // constant
console.log(`The value of PI is ${PI}`);
// have seen the primitives, now let's see the objects
let person = {
    name: 'Getch',
    age: 24,
    isStudent: true
};
console.log(`My name is ${person.name}, I am ${person.age} years old and it is ${person.isStudent} that I am a student.`);
// or we can use lke this
console.log(person)
person.name = 'Getayawkal Befkadu'; // updating the name
console.log(person).name; // accessing the name
// The Bracket Notation
person['age'] = 25; // updating the age
console.log(`I am now ${person['age']} years old!`); // accessing the age   
