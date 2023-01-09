
/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: Multiply 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
/*

Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the parameters: a and b
   3. Multiply a and b and return the answer
*/

function multiply(a, b){
    return a * b;
  }
console.log(multiply(5,2))
/*


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: Age in Cat years 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

/*
Do the following:
   1. Invoke the catYears function below and pass an age value to it
   2. Use the received value to calculate the age in cat years (1 human year is equal to 7 cat years)
   3. Return the newly calculated age
*/

function catYears(age){
    catAge = 7
    return catAge * age
}
console.log(catYears(4))




/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: Convert to Arrow Function  🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Take the commented ES5 syntax and convert it to ES6 arrow Syntax


/*

------------
function myFunction() {
console.log("Function was invoked!");
};

myFunction();
----------------

let anotherFunction = function (param) {
  return param;
};

anotherFunction("Example");

---------------

let add = function (param1, param2) {
  return param1 + param2;
};

add(1,2);

*/
const myFunction = () => { console.log("Function was invoked!"); }
myFunction();

let anotherFunction =  (param) =>{ return param; }
console.log(anotherFunction("Example"))

let add = (param1, param2) => { return param1 + param2; };
console.log(add(1,2));

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: Rock, Paper, Scissors - Let's play against the computer! 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

/*
Create a global variable that randomly generates the computer's choice
Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)
HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()
Use the game function below to do the following:
  1. Receive 2 parameters the user's choice and the computer's choice
  2. Return whether the user won, lost, or tied based on these rules of the game described below - the strings returned need to match the strings below exactly.
   - win should return "you win!"
   - lose should return "you lose!"
   - tie should return "it's a tie"
  
  RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
  
  HINT: Remember that the order in which we pass in our arguments matters when it comes to parameters
  
*/


const computerChoice = ['Rock', 'Paper', 'Scissors']

function game(user, computer){
  computer = Math.floor(Math.random() * computerChoice.length)
  const choices = {'userChoice': user, 'computerChoice': computerChoice[computer]}
  console.log(choices)
  if(user ===  computerChoice[computer])
    return "it's a tie"
  else if(user === 'Rock' && computerChoice[computer] === 'Scissors')
    return "you win!"
  else if(user === 'Scissors' && computerChoice[computer] === 'Paper')
    return 'you win!'
  else if(user === 'Paper' && computerChoice[computer] === 'Rock')
    return 'you win!'
  else
    return "you lose!"
}

const user = prompt('Enter your choice:')
if(user === null || user === '')
  console.log('Sorry try again with correct input...' )
else
  console.log(game(user, computerChoice))




/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
  1. Receive a starting number and start the count down from the number received 
  2. At each invocation, it should RETURN this string (note: the tests are expecting the same string as below):
      "{number} bottles of soda on the wall, {number} bottles of soda, take one down pass it around {number left over} bottles of soda on the wall"
*/

function annoyingSong(num){
  while(num >= 1){
    console.log(`${num} bottless of soda on the wall, ${num} bottles of soda, take one down pass it around ${num-1} bottles of soda on the wall`)
    num--
  }
        
  }

  annoyingSong(99)
