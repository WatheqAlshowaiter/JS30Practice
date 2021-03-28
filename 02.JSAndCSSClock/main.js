const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

function startClock() {
	const now = new Date();
	const seconds = now.getSeconds();
	// console.log(seconds)
	// we need to convert second to degress to rotate them properly (seconds / 60) * 360
	// then we need to add (90) because we added it at firsts
	const secondsDegrees = (seconds / 60) * 360 + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const minutes = now.getMinutes();
	const minutessDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
	minHand.style.transform = `rotate(${minutessDegrees}deg)`;

	const hours = now.getHours();
	const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

	if (secondsDegrees === 90) secondHand.style.transition = "all 0s";
	else secondHand.style.transition = "all 0.05s";

	if (minutessDegrees === 90) minHand.style.transition = "all 0s";
	else minHand.style.transition = "all 0.1s";
}

startClock(); // for testing only
setInterval(startClock, 1000);
