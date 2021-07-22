// chapter 3: This & Prototypes
//First we will start with This
console.log(
  "This function, as you know it's refers to the object it belongs to"
);
// In a method, this refers to the owner object.
const phone = {
  brand: "Sony",
  name: "Xperia 1 III",
  cpu: "sq 888",
  display: "4k 120hz",
  camera: 12,
  ram: 12,
  battery: 4500,
  price: 1300,
  fullName: function () {
    return this.brand + " " + this.name;
  }, //this refer to owner object (phone)
};
console.log(
  "\n * * * * In a method, this refers to the owner object : ",
  phone.fullName()
);

// Alone, this refers to the global object.
let x = this;
console.log("\n * * * * Alone, this refers to the global object : ", x); //this here will return the global object which the windows if run this command in navigator console;

// In a function, this refers to the global object.
function hello() {
  return this;
}
console.log(
  "\n * * * * In a function, this refers to the global object :",
  hello
);
// In a function, in strict mode, this is undefined.
("use strict");
function myFunction() {
  return this;
  console.log(this);
}
console.log(
  "\n * * * * In a function, in strict mode, this is undefined.",
  myFunction()
);
// In an event, this refers to the element that received the event.

//i can't give an example here because i need html

// Methods like call(), and apply() can refer this to any object.
const person1 = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const person2 = {
  firstName: "John",
  lastName: "Doe",
};
console.log(
  "\n * * * * Methods like call(), and apply() can refer this to any object.", person1.fullName.call(person2)
); // Will return "John Doe"
//another example 
function ask(question){
    console.log(this.coder, question);
}
function codefile(){
    var myContext = {
        coder : "lamine"
    };
    ask.call(myContext, "Do you love JavaScript ?");
}
codefile();

// let's go now to prototypes
console.log("\n* * * * * Prototypes* * * * * *");

function Workshop(teacher){
    this.teacher = teacher;
}
Workshop.prototype.ask = function(question){
    console.log(this.teacher, question);
};
var deepJs = new Workshop("Youcef");
var reactJS = new Workshop("Yanis");

deepJs.ask("Is 'Prototype' a class ?");
reactJS.ask("Isn't 'prototype' ugly?\n");

// or we can use class
class Workshop2 {
    constructor(teacher) {
        this.teacher = teacher;
    }
    ask(question) {
        console.log(this.teacher, question);
    }
}
var deepJs = new Workshop2("Yanis");
var reactJS = new Workshop2("Youcef");

deepJs.ask("Is 'Prototype' a class ?");
reactJS.ask("Isn't 'prototype' ugly?\n");