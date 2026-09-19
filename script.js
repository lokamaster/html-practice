const darkModeButton = document.getElementById("dark-mode-button");
darkModeButton.addEventListener('click', () => {
  document.documentElement.classList.toggle("dark-mode");
});

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

function isPrime(n) {
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
