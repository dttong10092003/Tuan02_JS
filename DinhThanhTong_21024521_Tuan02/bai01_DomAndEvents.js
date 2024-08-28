let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

const message = document.querySelector('.message');
const number = document.querySelector('.number');
const scoreDisplay = document.querySelector('.score');
const guessInput = document.querySelector('.guess');
const body = document.querySelector('body');
const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');

checkBtn.addEventListener('click', function () {
  const guess = Number(guessInput.value);

  if (!guess) {
    message.textContent = 'Không có số!';
  } else if (guess === secretNumber) {
    message.textContent = 'Đúng rồi!';
    number.textContent = secretNumber;
    body.style.backgroundColor = 'red';
  } else {
    if (score > 1) {
      message.textContent = guess > secretNumber ? 'Quá cao!' : 'Quá thấp!';
      score--;
      scoreDisplay.textContent = score;
    } else {
      message.textContent = 'Bạn đã thua cuộc!';
      scoreDisplay.textContent = 0;
    }
  }
});

againBtn.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  message.textContent = 'Bắt đầu đoán...';
  number.textContent = '?';
  scoreDisplay.textContent = score;
  guessInput.value = '';

  body.style.backgroundColor = 'white'; 
  number.style.width = '15rem';
});