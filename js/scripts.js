// declaring all the variables
var outp = document.getElementById("outp");
var inpuB = document.getElementById("inpuB");
var inpu = document.getElementById("inpu");
var comprock = document.getElementById("comprock");
var compPaper = document.getElementById("compPaper");
var compScissor = document.getElementById("compScissor");
var playrock = document.getElementById("playrock");
var playPaper = document.getElementById("playPaper");
var playScissor = document.getElementById("playScissor");
var resultBox = document.getElementById('result');
var container1 = document.getElementById('container1');
var container2 = document.getElementById('container2');


// --------------- Basic Logic of the Game ---------------
// In this game the following would be marked as numbers ---->

// ||===================================================||
// || DECLARATIONS       ||   COMBINATIONS              ||
// ||--------------------||-----------------------------||
// || 0 = rock           ||  '02' = player won          ||
// || 1 = paper          ||  '10' = player won          ||
// || 2 = scissor        ||  '21' = player won          ||
// ||===================================================||


// Main Function to be called on every movement regarding game 
function inp(input) {
  let player;  // Stores the player selection
  let computer = parseInt(Math.random() * 3); // bot selection
// -----------------------------------------------------------
  // computer takes a random number from 0 t0 2 in which --->
  // 0--> Rock
  // 1--> paper
  // 2--> scissor
// -----------------------------------------------------------

// if else statements to check player selections
// --------------------------------------------------
// it first check the selection and then add active class in that button and also removes the active button from other buttons. Then it adds the following output to players output box
  if (input == "rock") {
    player = 0;
    playrock.classList.add("active");
    playPaper.classList.remove("active");
    playScissor.classList.remove("active");
    inpuB.innerText = "rock";
  } else if (input == "paper") {
      player = 1;
    playrock.classList.remove("active");
    playPaper.classList.add("active");
    playScissor.classList.remove("active");
    inpuB.innerText = "paper";
  } else {
      player = 2;
    playrock.classList.remove("active");
    playPaper.classList.remove("active");
    playScissor.classList.add("active");
    inpuB.innerText = "scissor";
  }
// if else statements to check bot selections
// --------------------------------------------------
// same applies here as in the players selection
  if (computer == 0) {
    comprock.classList.add("active");
    compPaper.classList.remove("active");
    compScissor.classList.remove("active");
    outp.innerText = "rock";
  } else if (computer == 1) {
    comprock.classList.remove("active");
    compPaper.classList.add("active");
    compScissor.classList.remove("active");
    outp.innerText = "paper";
  } else {
    comprock.classList.remove("active");
    compPaper.classList.remove("active");
    compScissor.classList.add("active");
    outp.innerText = "scissor";
  }

// storing the combination to check draw winner respectively
  let resultval = String(player)+String(computer);
  // ------------------
  // player 
  // 02 --player won  
  // 10 --player won
  // 21 -- player won

// Checking The winner or draw using if-else 

// to check draw
  if(player == computer){
    resultBox.innerText="Draw";
    // console.log('match draw') // debug statement
   }
// to check if player wins
  else if(resultval == '02' || resultval == '10' || resultval == '21'){
      resultBox.innerText="Player Won";
      //   console.log('player won'); // debug statement
  }
// If player doesnot wins and its not a draw than this means that bot won || so else statement is used here 
  else{
      resultBox.innerText="Computer Won";
      // console.log('computer Won')  // debug statement
  }
}