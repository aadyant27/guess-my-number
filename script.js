'use strict';
/*
ALOGRITHM TO GET RANDOM NUMBERS BETWEEN a,b :->
Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER.
*/

//global variables
let highscore = 0;

//CREATE GUESS NUMBER (random between 0 & 20)
//INIT
let Gnum = Math.floor(Math.random() * 20) + 1;
let currentScore = 20;
console.log(Gnum);

//QUERY SELECTORS
const guess = document.querySelector('.guess');
const msg = document.querySelector('.message');
const score = document.querySelector('.score');
const hScore = document.querySelector('.highscore');
const body = document.querySelector('body');
const questionMark = document.querySelector('.number');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

function Game(e) {
  console.log(e);
  const num = Number(guess.value);
  console.log(num);

  if (num === 0) {
    // IF NO NUMBER (or 0) IS ENTERED
    msg.textContent = '⛔️ No Number!';
  } else {
    if (num === Gnum) {
      /*
        UPON SUCCESS,
        a. DISPLAY MESSAGE "correct numberge"
        b. SET HIGHSCORE TO CURRENT-SCORE
        c. MAKE THE ENTIRE SCREEN GREEN ON SUCCESS
        d. REPLACE THE "?" WITH THE #.
        */
      msg.textContent = 'Correct Number!';

      highscore = currentScore;

      hScore.textContent = `${highscore}`;

      body.style.backgroundColor = '#60b347';

      questionMark.textContent = `${num}`;
    } else {
      // DECREMENT SCORE ON EACH TRY
      if (currentScore === 0) {
        score.textContent = 0; //LOST THE GAME FUNCTIONALITY
      } else {
        currentScore = currentScore - 1;
        score.textContent = `${currentScore}`;
      }

      //UPON EVERY TRIAL, CHECK TO SEE IF PASSED NUMBER IS HIGHER OR LOWER THAN THE MISSING NUMBER
      if (num < Gnum) msg.textContent = 'Too low!';
      else msg.textContent = 'Too High!';
    }

    //LOST THE GAME
    if (currentScore <= 0) {
      msg.textContent = '💥 You Lost the game!';
    }
  }
}

//EVENT LISTENERS
document.addEventListener('keydown', e => {
  if (e.key == 'Enter') Game(e);
});

checkBtn.addEventListener('click', x => {
  Game(x);
});

//PRESSING "AGAIN" RESETS THE GAME BUT NOT THE HIGH SCORE
againBtn.addEventListener('click', x => {
  console.log(x);
  Gnum = Math.floor(Math.random() * 20) + 1;
  console.log(Gnum);

  currentScore = 20;
  score.textContent = `${currentScore}`;

  body.style.backgroundColor = '#222';
  questionMark.textContent = '?';
  msg.textContent = 'Start guessing...';

  guess.value = '';
});
