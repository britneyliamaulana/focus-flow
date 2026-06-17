let timer;
let timeLeft = 1500;

const timerDisplay =
  document.getElementById('timer-display');

function updateDisplay() {

  const minutes =
    Math.floor(timeLeft / 60);

  const seconds =
    timeLeft % 60;

  timerDisplay.textContent =
    `${minutes.toString().padStart(2, '0')}:` +
    `${seconds.toString().padStart(2, '0')}`;
}

export function startTimer() {

  if (timer) return;

  timer = setInterval(() => {

    timeLeft--;

    updateDisplay();

    if (timeLeft <= 0) {

      clearInterval(timer);

      timer = null;

      alert('Focus session complete!');
    }

  }, 1000);
}

export function pauseTimer() {

  clearInterval(timer);

  timer = null;
}

export function resetTimer() {

  clearInterval(timer);

  timer = null;

  timeLeft = 1500;

  updateDisplay();
}

updateDisplay();