// get the elements
const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const toggle = document.querySelector(".toggle");
const ranges = document.querySelectorAll(".player__slider");

const skipButtons = document.querySelectorAll("[data-skip]");

/* build funcitons */
function togglePlay() {
	const method = video.paused ? "play" : "pause";
	video[method](); // strange way, right?

	// the obious way
	// if (video.paused) {
	// 	video.play();
	// } else {
	// 	video.pause();
	// }
}

function updateButton() {
	toggle.textContent = this.paused ? "▶️" : "⏸";
}

function skip() {
	video.currentTime += parseFloat(this.dataset.skip);
}

function handleProgress() {
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

function handleRangeUpdate() {
	video[this.name] = this.value;
}

function scrub(e) {
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
}

/* hook up the event listeners */

// toggle play/pause the video
video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay); // even when clicking on the icon it will works!

// toggle play icon "►"/pause icon "❚ ❚";
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

// skip buttons, forward and backward
skipButtons.forEach((skipButton) => skipButton.addEventListener("click", skip));

// progress bar
video.addEventListener("timeupdate", handleProgress); // update the progress bar when the video plays

// ranges: for playback speed and audio
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
	range.addEventListener("mousemove", handleRangeUpdate)
);

// scrup : to move on any given time via the mouse on the bar
progress.addEventListener("click", scrub);

// test
document.addEventListener("keypress", function (e) {
	if (e.key === "Enter") {
		toggleFullScreen();
	}
	if (e.key === "space") {
		togglePlay();
	}
});

function toggleFullScreen() {
	if (!document.fullscreenElement) {
		document.documentElement.requestFullscreen();
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		}
	}
	player.classList.toggle("fullscreen");
}
