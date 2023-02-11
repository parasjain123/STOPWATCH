const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const duration = document.getElementById("duration");

let startTime;
let intervalId;

startBtn.addEventListener("click", function () {
  startTime = Date.now();
  intervalId = setInterval(function () {
    const elapsedTime = Date.now() - startTime;
    duration.innerHTML = `Duration: ${elapsedTime / 1000} seconds`;
  }, 100);
});

stopBtn.addEventListener("click", function () {
  clearInterval(intervalId);
});
