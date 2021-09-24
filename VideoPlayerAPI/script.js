const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// Basic video manipulation
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  // Gettings minutes
  let mins = Math.floor(video.currentTime / 60);
  if(mins < 10) {
      mins = '0' + String(mins);
  }

  // Getting seconds
  let seconds = Math.floor(video.currentTime % 60);
  if(seconds < 10) {
      seconds = '0' + String(seconds);
  }

  timestamp.innerHTML = `${mins}:${seconds}`;
}

function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

// There is no video.stop api so we first have to set the current time of the video back to 0 and then pause it.
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// Listeners of the events
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", stopVideo);
progress.addEventListener("change", setVideoProgress);

// More information can be found at https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs