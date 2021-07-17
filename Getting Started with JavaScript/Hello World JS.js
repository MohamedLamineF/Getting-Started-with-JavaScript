var coder = "Mohamed Lamine FADIS";
var nickname = "lamine";
var twitinsta = "@mohamed_LamineF"
var age = "26";

 function Helloworld(myName,myNickname,myAge,mytwit) {
     console.log(`\n Hello World ! , I'm ${myName}, you can just call me ${myNickname}, and I'm ${myAge} years old, you can find me online as ${mytwit} \n`);
};

Helloworld(coder,nickname,age,twitinsta);

console.log("Now, let's talk about some importants things on JS and try it on the same time");
console.log("\n 1- Operations on JavaScript:\n");

console.log(" 2 + 5 ---> ", 2+5);
console.log(" 9 - 1 --->", 9-1);
console.log(" Hello + world --->", "Hello " + "World");
console.log(" ! false --->",!false);
console.log(" 3.0 == 3 --->",3.0 == 3);
console.log(" 3.0 === 3 --->", 3.0 === 3 );
console.log(" 3 < 4 --->",3 < 4 );
console.log(" true || false --->", true || false);

console.log("\n 2- Types:\n");

console.log("typeof 42 ---> ", typeof 42);
console.log("typeof 'lamine' ---> ", typeof "lamine");
console.log("typeof false ---> ", typeof false);
console.log("typeof undefined ---> ", typeof undefined);
console.log("typeof {name: lamine, num: 0} ---> ", typeof {name: "lamine", surname: "mohamed"});
console.log("typeof null ---> ", typeof null);
console.log("typeof [1,2,3] ---> ", typeof [1,2,3]);

console.log("\n 3- variables:\n");
console.log("All we know simple values like num = 3 & str='Hello'\n");
console.log("I declare this array: \nvar sandwich=['Tacos','chawarma','mariné','fajitas']");
var sandwich=['Tacos','chawarma','mariné','fajitas'];
console.log("sandwich.lenght ---> ", sandwich.length);
console.log("sandwich[1] ---> ", sandwich[1]);

console.log("\n4- if else : ");
var age = 11;
console.log("i'll write code check if age >18");
if (age>18){
    console.log("ola, your age > 18, you have", age,"years");
}
else{
    console.log("you are <18, go to play, you have ", age ,"years");
}

console.log("\n 5- Loop");
console.log("PS: i know coding with a static variable is ....., but this just some beginner test, im so sorry to my self");


for(let i=0; i<sandwich.length;i++){
    console.log("Do you want to eat an ", sandwich[i], " ? ")
}
console.log("\ni'll ask you for a second time ");

for(let sandwicho of sandwich){
    console.log("Do you want to eat an ", sandwicho, " ? ")
}

console.log("\nNow i'll use while loop")

console.log('\nUse pop()')
while(sandwich.length > 0){
    let sandwicho = sandwich.pop();
    console.log("Do you want to eat an ", sandwicho, " ? ")
}

console.log('\nUse shift()')
var sandwich=['Tacos','chawarma','mariné','fajitas'];
while(sandwich.length > 0){
    let sandwicho = sandwich.shift();
    console.log("Do you want to eat an ", sandwicho, " ? ")
}