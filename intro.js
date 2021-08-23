console.log("hello world")

const firstName = "Adam";
let age = 28;
age = 100;
console.log(firstName, age);

let favRobot = 'Voltron';
let favColor = `blue`;
// concatenate strings with +
console.log("Hello, my name is " + firstName);
// concat with template literal
console.log(`I am ${age} years old`);

const isCool = true;

let powerLevel;
let weaknesses = null;
console.log(powerLevel);

if (age > 99){
    console.log("Take away his driver's license!")
} else {
    console.log("Move along")
}

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Enter a number to see if it's Adam's favorite: ", function(answer){
    if(+answer === 12){
        console.log("That's Adam's favorite number!")
    } else {
        console.log("Womp womp thanks for playing")
    }
    reader.close()
});
