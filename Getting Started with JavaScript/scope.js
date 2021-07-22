// chapter 3: Scope
console.log("\n First we try to understend what is a scope ?");

console.log(
  "* * * * * *\nSimply, Scope determines the visibility or accessibility of a variable or other resource in the area of your code.\n* * * * * *"
);

var coder = "Lamine";

function otherFile() {
  coder = "not_lamine";
  topic = "Swift";
  console.log("Good Luck with Swift Language");
}

console.log("The Coder Name is: ", coder);
console.log("function otherfile executed !");
otherFile();
console.log("The Coder Name is: ", coder);
console.log("The Topic: ", topic);

console.log("\nArrow Function");
/*in this example i take a name of season of the year then try to get lenght from each one,
first i'll use direct arrow function without name,
then i use a function with a name indicate what i want to do*/
var seasons = ["Winter", "Spring", "Summer", "Autumn"];

var seasonlength = seasons.map((season) => season.length);
console.log(seasonlength);

var seasonlenght = seasons.map(function getlength(season) {
  return season.length;
});
console.log(seasonlength);

//IIFEs (Immediately Invoked Function Expression)
console.log("\nNow we will see IIFEs\n");
console.log(
  "First i declare a variable os with Windows 10 value, then i created an IIFE and change os value to windows 11"
);
var os = "Windows 10";
console.log("os value Before IFFE", os);
(function newComputer() {
  var os = "Windows 11";
  console.log("os value in IFFE:", os);
})(); // without () the function will not be executed
console.log("os value after IFFE", os);

console.log(
  "\n Block Scoping with let , what do you think we can consider it as Encapsulation\n"
);
var os = "Android";
{
  let os = "Harmony OS"; //i know Harmony isn't OS but i prefer to write Harmony better ... :p
  console.log(os);
}
console.log(os);

console.log("Now we will write a function using var and let");
//
function letTest() {
  var x = 1;
  {
    let y = 2;
    console.log("Let's Test : ",x+y);
  }
}
letTest();

// explicit let block 
//now i write a function with a let in a block , after the 
function formatStr(str){
  {
    let prefix, rest;
    prefix = str.slice(0,3);
    rest = str.slice(3);
    str = prefix.toUpperCase() + rest;
  };
  //i didn't understand this /^FOO:/ !!!!!!!!!!!!!!!!!!!!!!!!
  if(/^FOO:/.test(str)){
    return str;
  }
  return str.slice(4);
}
console.log(formatStr("mohamed"));


console.log("\nClosure, let's Try closure now");
//i will create a closure function compare car speed % myCar Speed.
function fasterCar(car){
  let bugattiSpeed = 430.9;
  return function (speed){
    if (speed > bugattiSpeed){
      console.log(car.toUpperCase() , "Fastest than buggati");
    }
    else{
      console.log(car , "Slower than buggati");
    }
  }
}

let firstCar = fasterCar("hennessey"); 
firstCar(435.30);

let secondCar = fasterCar("koenigsegg");
secondCar(429.30);

let thirdCar = fasterCar("ssc");
thirdCar(412.28);

