/* Dark mode logic. */
const darkModeButton = document.getElementById("dark-mode-button");
darkModeButton.addEventListener('click', () => {
  document.documentElement.classList.toggle("dark-mode");
});

/* Slider logic. */
const sliderOne = document.getElementById("slider-line-1");
sliderOne.addEventListener("input", (e) => {
  const max = sliderOne.max;
  const min = sliderOne.min;

  const path = document.getElementById("path-1");
  const circle = document.getElementById("circle-1");

  const length = path.getTotalLength();
  const pointOnPath = (
    length * (sliderOne.value - min) / (max - min)
  );
  const newPoint = path.getPointAtLength(pointOnPath);

  circle.setAttribute("cx", newPoint.x);
  circle.setAttribute("cy", newPoint.y);
});

/* Primality check logic. */
const isPrime = n => {
  if (n < 4) {
    return n > 1;
  } else if (n % 2 == 0 || n % 3 == 0) {
    return false;
  }

  let k = 5;
  while (k*k <= n) {
    if (n % k == 0 || n % (k+2) == 0) {
      return false;
    }
    k += 6;
  }
  return true;
}

const primeOutput = document.getElementById("prime-result");
const primeButton = document.getElementById("prime-button");
primeButton.addEventListener("click", () => {
  const inputPrime = document.getElementById("prime-input");
  const n = inputPrime.value;
  const prime = isPrime(n) ? " is " : " is not ";
  primeOutput.textContent = n + prime + "prime";
});

/* Stopwatch logic. */
const stopwatchTimer = document.getElementById("stopwatch-timer");
const stopwatchButton = document.getElementById("stopwatch-button");

let intervalId = null;
let running = false;
let seconds = 0;

const formatTime =  (s) => {
  const min = String(Math.floor(s / 60)).padStart(2, '0');
  const sec = String(s % 60).padStart(2, '0');
  return `${min}:${sec}`
}

const start = () => {
  stopwatchButton.textContent = "Stop";
  stopwatchTimer.textContent = "00:00";
  intervalId = setInterval(() => {
    seconds += 1;
    stopwatchTimer.textContent = formatTime(seconds);
  }, 1000);
}

const stop = () => {
  stopwatchButton.textContent = "Start";
  clearInterval(intervalId);
  seconds = 0;
}

stopwatchButton.addEventListener("click", () => {
  running ? stop() : start();
  running = !running;
});
