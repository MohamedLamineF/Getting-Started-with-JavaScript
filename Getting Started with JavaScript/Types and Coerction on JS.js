// chapter 2: Types & Coercion
console.log(
  "Did You Know ? \n In JavaScript Varibles don't have Types, Values do\n let's try it"
);

var v;
console.log("\n var v, typeof v ---> ", typeof v);
v = "Hello";
console.log("\n v = 'Hello', typeof v --->", typeof v);
v = 5;
console.log("\n v = 5, typeof v --->", typeof v);
v = true;
console.log("\n v = true, typeof v --->", typeof v);
v = {};
console.log("\n v = {} , typeof v --->", typeof v);
v = Symbol();
console.log("\n v = symbol() , typeof v --->", typeof v);
v = null;
console.log("\n v =null , typeof v --->", typeof v);
v = function () {};
console.log("\n v = function(){}, typeof v --->", typeof v);
v = [1, 2, 3];
console.log("\n v = [1,2,3], typeof v --->", typeof v);

console.log("let's talk now about NAN Not A Number");
var myName = "Mohamed Lamine";
var test = myName / 3;
console.log("myName = Mohamed Lamine; isNAN ? --> ", Number.isNaN(myName));
console.log("test = myName / 3; isNAN ? --> ", Number.isNaN(test));
// conclusion isNaN indicate invalid numeric operation

var independanceDay = new Date("July 5, 1962");
console.log(independanceDay.getMonth() + 1);
console.log(
  `\nNow i use New Date() to create a Independance Day ALGERIA : ${independanceDay.toLocaleDateString()}`
);

console.log("\nlet's talk about Equality == AND ===");
console.log(
  "Simply the difference it's: \n == allow coercion(Types differents) \n === disallow coercion(Types same)"
);
console.log(
  `I declare 3 variables : one = 1, one_again = 1 and one_string = "1`
);
var one = 1,
  one_again = 1,
  one_string = "1";
console.log("one ==  one_again   ---> ", one == one_again);
console.log("one ===  one_again  ---> ", one === one_again);
console.log("one ==  one_string  ---> ", one == one_string);
console.log("one ===  one_string ---> ", one === one_string);

console.log("\nWhats about !=  and !== ? let's Try");
console.log(" one != one_again   ---> ", one != one_again);
console.log(" one != one_string  ---> ", one != one_string);
console.log(" one !== one_string ---> ", one !== one_string);
