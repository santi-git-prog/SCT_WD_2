let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const laps = document.getElementById("laps");

function timeToString(time) {
  let hrs = Math.floor(time / 3600000);
  let mins = Math.floor((time % 3600000) / 60000);
  let secs = Math.floor((time % 60000) / 1000);
  let ms = Math.floor((time % 1000) / 10);

  return (
    (hrs < 10 ? "0" + hrs : hrs) + ":" +
    (mins < 10 ? "0" + mins : mins) + ":" +
    (secs < 10 ? "0" + secs : secs) + "." +
    (ms < 10 ? "0" + ms : ms)
  );
}

function print(txt) {
  display.textContent = txt;
}

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime));
  }, 10);
  startBtn.disabled = true;
}

function pause() {
  clearInterval(timerInterval);
  startBtn.disabled = false;
}

function reset() {
  clearInterval(timerInterval);
  print("00:00:00.00");
  elapsedTime = 0;
  startBtn.disabled = false;
  laps.innerHTML = "";
}

function lap() {
  const li = document.createElement("li");
  li.textContent = timeToString(elapsedTime);
  laps.appendChild(li);
}

startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);
lapBtn.addEventListener("click", lap);
