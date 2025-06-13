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
// other example to summrize all the above concepts all in one
// Example: Student Registration System

// 1. Declare a student object with properties (object, string, number, boolean)
let student = {
    name: 'Getch',         // string property
    age: 24,               // number property
    isRegistered: false,   // boolean property
    courses: []            // array property
};

// 2. Register the student (update boolean)
student.isRegistered = true; // set registration status to true

// 3. Add courses to the student (array, push method)
student.courses.push('JavaScript Basics');
student.courses.push('HTML & CSS');

// 4. Print student info (template literals, object access)
console.log(`Student: ${student.name}, Age: ${student.age}`);
console.log(` student Full name is ${student.name}, and his age is corrrect ${student.age} years old.`);
console.log(`Registered: ${student.isRegistered}`);

// 5. List all courses using a loop (forEach)
console.log('Courses:');
student.courses.forEach((course, index) => {
    console.log(`${index + 1}. ${course}`);
});

// 6. Convert all course names to uppercase (map)
let upperCourses = student.courses.map(course => course.toUpperCase());
console.log('Courses in uppercase:', upperCourses);

// 7. Update student name (object property)
student.name = 'Getayawkal Befkadu';

// 8. Print updated student info
console.log(`Updated Name: ${student.name}`);

// 9. Use bracket notation to update age
student['age'] = 25;
console.log(`Updated Age: ${student['age']}`);

// This example uses variables, data types, objects, arrays, loops, methods, and property access!
// let us see functions now
// Functions in JavaScript      
// 1. Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
// Calling the function
console.log(greet('Getch')); // Output: Hello, Getch!
// 2. Function Expression   
const add = function(a, b) {
    return a + b;
};
// Calling the function
console.log(add(5, 3)); // Output: 8        
// 3. Arrow Function    '
const multiply = (x, y) => x * y;
// Calling the function
console.log(multiply(4, 6)); // Output: 24
// 4. Function with Default Parameters
function introduce(name = 'Guest', age = 18) {
    return `My name is ${name} and I am ${age} years old.`;
}
// Calling the function with default parameters
console.log(introduce()); // Output: My name is Guest and I am 18 years old.
// Calling the function with custom parameters
console.log(introduce('Getch', 24)); // Output: My name is Getch and I am 24 years old. 
// 5. Function Returning Another Function
function outerFunction() {
    return function innerFunction() {
        return 'Hello from the inner function!';
    };
}           
// Calling the outer function and then the inner function
const innerFunc = outerFunction();

const new_age = 20;
if(age >= 21){
    console.log("you can drink alchol");
}else if(new_age >=20 && new_age < 21){
    console.log("you can drink alchol but not in public places");
}else{
    console
}

// switch optional but good to know!!
const role = "admin";

switch (role) {
  case "admin":
    console.log("Welcome Admin!");
    break;
  case "editor":
    console.log("Welcome Editor!");
    break;
  case "viewer":
    console.log("Welcome Viewer!");
    break;
  default:
    console.log("Unknown role.");
}
// function
function hey(name){
return `hello dear $(name);`
}

// expression function

const greet = (name) => {
return `hello dear $(name);`
}
// arrow function
const add = (a, b) => {
  return `The result is ${a + b}`;
};

console.log(add(4, 6)); // Output: "The result is 10"
// clean and short version of the code
const add = (a, b) => a + b;
console.log(add(4, 6)); // Output: 10

// next we will see about object orinted    
// programming (OOP) in JavaScript  
// 1. Class Declaration
class Person {
    constructor(name, age) {
        this.name = name; // instance variable
        this.age = age;   // instance variable
    }

    greet() { // method
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Creating an instance of the class
const person1 = new Person('Getch', 24);
// Calling the greet method
console.log(person1.greet()); // Output: Hello, my name is Getch and I am 24 years old. 
// 2. Inheritance
class Student extends Person {
    constructor(name, age, major) {
        super(name, age); // calling the parent class constructor
        this.major = major; // additional property
    }

    study() { // additional method
        return `${this.name} is studying ${this.major}.`;
    }
}

// Creating an instance of the Student class
const student1 = new Student('Getayawkal', 24, 'Computer Science');
// Calling the inherited method
console.log(student1.greet()); // Output: Hello, my name is Getayawkal and I am 24 years old.
// Calling the additional method
console.log(student1.study()); // Output: Getayawkal is studying Computer Science.
// 3. Static Methods
class MathUtils {
    static add(a, b) { // static method
        return a + b;
    }

    static multiply(a, b) { // another static method
        return a * b;
    }
}


//next we will see how to use the static methods
console.log(MathUtils.add(5, 3)); // Output: 8
console.log(MathUtils.multiply(4, 6)); // Output: 24    
// 4. Getters and Setters
class Circle {
    constructor(radius) {
        this.radius = radius; // instance variable
    }

    get area() { // getter
        return Math.PI * this.radius * this.radius;
    }

    set radiusValue(newRadius) { // setter
        this.radius = newRadius;
    }
}
























































































