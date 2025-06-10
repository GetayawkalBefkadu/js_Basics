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
//array
names = ['Getch', 'Getayawkal', 'Befkadu']; // array of strings
console.log(`My names are ${names[0]}, ${names[1]} and ${names[2]}`); // accessing the array elements
// or we can use the for loop to access the array elements
for (let i = 0; i < names.length; i++) {
    console.log(`My name is ${names[i]}`);
}
// we can also use the forEach method to access the array elements
names.forEach((name) => {
    console.log(`My name is ${name}`);
});
// we can also use the map method to access the array elements
let upperCaseNames = names.map((name) => {
    return name.toUpperCase();
});