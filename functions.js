
/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: Multiply 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
/*

Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the parameters: a and b
   3. Multiply a and b and return the answer
*/

function multiply(/*add your code here*/){
    /*add your code here*/
  }
const multiply = function(num1, num2) {
  return num1 - num2
  } 
console.log(multiply(4, 4))
    
//Or We can say: 

const multiply = (num1, num2) => num1 * num2

console.log(multiply(6, 6))


/*


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: Age in Cat years 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

/*
Do the following:
   1. Invoke the catYears function below and pass an age value to it
   2. Use the received value to calculate the age in cat years (1 human year is equal to 7 cat years)
   3. Return the newly calculated age
*/

function catYears(/*add your code here*/){
    /*add your code here*/
}
function catYears(num1, num2, num3, num4, num5, num6, num7) {
  return num1 + num2 + num3 + num4 + num5 + num6 + num7
  }
  
  console.log(num4, num5, num6, num7(1, 3, 5, 7, 9, 2, 4))



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
let myFunction =() => console.log('Function was invoked!')

let add = (param1, param2) => param1 + param2

console.log(add(1, 2))


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

function game(user, computer){
    /*add your code here*/
}

// ROCK PAPER SCISSORS IMAGE SOURCE - WIKIPEDIA
// https://commons.wikimedia.org/wiki/File:Pierre_ciseaux_feuille_l%C3%A9zard_spock_aligned.svg
var rps = {
  /* [PROPERTIES] */
  eYou : null, // holds your move HTML container
  eCom : null, // holds computer move HTML container
  eSel : null, // holds HTML rock, scissors, paper selector
  eGo : null, // holds HTML go button
  eWin : null, wins : 0, // wins counter
  eLose: null, loses : 0, // loses counter
  eDraw : null, draws : 0, // draws counter

  /* [GAME INIT] */
  load : function () {
  // load() : preload all the images

    var images = ["game-rock.png", "game-paper.png", "game-scissors.png"],
        img = null,
        loaded = 0;
    for (var i of images) {
      img = new Image();
      img.onload = function(){
        loaded++;
        if (loaded == images.length) { rps.init(); }
      }
      img.src = i;
    }
  },

  init : function () {
  // init() : prepare the game

    // Get all the necessary game elements
    rps.eYou = document.getElementById("rps-you-move");
    rps.eCom = document.getElementById("rps-com-move");
    rps.eSel = document.getElementById("rps-you-sel");
    rps.eGo = document.getElementById("rps-you-go");
    rps.eWin = document.getElementById("rps-win");
    rps.eLose = document.getElementById("rps-lose");
    rps.eDraw = document.getElementById("rps-draw");

    // When user changes rock, paper, scissors selection
    rps.eSel.addEventListener("change", rps.switch);
    rps.switch();

    // When user hits "Go!"
    rps.eGo.addEventListener("click", rps.game);

    // Unlock all controls
    rps.eSel.disabled = false;
    rps.eGo.disabled = false;
  },

  /* [GAME RUN] */
  switch : function () {
  // switch() : when user changes move

    var img = new Image();
    img.src = "game-" + rps.eSel.value + ".png";
    rps.eYou.innerHTML = "";
    rps.eYou.appendChild(img);
  },

  game : function () {
  // game() : game on!

    // Random computer move - Equal 33.3333% chance to get each
    var comMove = Math.random();
    if (comMove <= 0.33) { comMove = "rock"; }
    else if (comMove <= 0.67) { comMove = "paper"; }
    else { comMove = "scissors"; }

    // Update computer move graphic
    var img = new Image();
    img.src = "game-" + comMove + ".png";
    rps.eCom.innerHTML = "";
    rps.eCom.appendChild(img);

    // Win, lose, or draw?
    var youMove = rps.eSel.value;
    if (youMove == comMove) {
      rps.draws++;
      rps.eDraw.innerHTML = rps.draws;
      alert("DRAW");
    } else {
      var win = true;
      switch (youMove) {
        case "rock":
          if (comMove=="paper") { win = false; }
          break;
        case "paper":
          if (comMove=="scissors") { win = false; }
          break;
        case "scissors":
          if (comMove=="rock") { win = false; }
          break;
      }
      if (win) {
        rps.wins++;
        rps.eWin.innerHTML = rps.wins;
        alert("YOU WIN");
      } else {
        rps.loses++;
        rps.eLose.innerHTML = rps.loses;
        alert("YOU LOSE");
      }
    }
  }
};
window.addEventListener("load", rps.load);


/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
  1. Receive a starting number and start the count down from the number received 
  2. At each invocation, it should RETURN this string (note: the tests are expecting the same string as below):
      "{number} bottles of soda on the wall, {number} bottles of soda, take one down pass it around {number left over} bottles of soda on the wall"
*/

function annoyingSong(/*add your code here*/){
        /*add your code here*/
  }
