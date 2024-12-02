// a way to pass code from one file to another

// accessing functions and variales from other files
const greet = require("./greet");
const {person1, person2, person3} = require("./people");


console.log(person1, person2, person3);

greet (person1);
greet (person2);
greet (person3);


