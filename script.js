const darkModeButton = document.getElementById("dark-mode-button");
darkModeButton.addEventListener('click', () => {
	document.body.classList.toggle("dark-mode");
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
