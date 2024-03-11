
// script for video play button

const video = document.getElementById("video");
const circlePlayButton = document.getElementById("circle-play-b");

function togglePlay() {
	if (video.paused || video.ended) {
		video.play();
	} else {
		video.pause();
	}
}

circlePlayButton.addEventListener("click", togglePlay);
video.addEventListener("playing", function () {
	circlePlayButton.style.opacity = 0;
});
video.addEventListener("pause", function () {
	circlePlayButton.style.opacity = 1;
});


const video2 = document.getElementById("video2");
const circlePlayButton2 = document.getElementById("circle-play-b2");

function togglePlay2() {
	if (video2.paused || video2.ended) {
		video2.play();
	} else {
		video2.pause();
	}
}

circlePlayButton2.addEventListener("click", togglePlay2);
video2.addEventListener("playing", function () {
	circlePlayButton2.style.opacity = 0;
});
video2.addEventListener("pause", function () {
	circlePlayButton2.style.opacity = 1;
});

$(document).ready(function () {
  $(".story").owlCarousel({
    center: false,
    items: 3,
    loop: true,
    margin: 5,
    stagePadding: 25,
    nav: true,
    dots: false,
  });
});

$(document).ready(function () {
  $(".story-1").owlCarousel({
    center: false,
    items: 4,
    loop: true,
    margin: 5,
    stagePadding: 25,
    nav: true,
    dots: false,
  });
});
