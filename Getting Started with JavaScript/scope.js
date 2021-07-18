// chapter 3: Scope
console.log("\n First we try to understend what is a scope ?");

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

var os = "Windows 10";
(function newComputer(){
    var os = "Windows 11";
    console.log(os);
})();
console.log(os);
