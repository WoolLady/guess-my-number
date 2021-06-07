'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = secretNumber; //Show secret number when testing

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const editNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const showScore = function (theScore) {
  document.querySelector('.number').textContent = theScore;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //   When there is no input
  if (!guess) {
    displayMessage('⛔No number');
  }
  // When player wins
  else if (guess === secretNumber) {
    displayMessage('🥳Correct Number!🎉');
    editNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game');
      showScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  //   location.reload(secretNumber);   This is another way to reload secret number instead of first line of above
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = ' ';
  editNumber('?');
});
