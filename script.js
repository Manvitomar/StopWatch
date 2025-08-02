let timer;
let isRunning = false;
let [hours, minutes, seconds] = [0, 0, 0];

function updateDisplay() {
  const display = document.getElementById("display");
  const h = String(hours).padStart(2, "0");
  const m = String(minutes).padStart(2, "0");
  const s = String(seconds).padStart(2, "0");
  display.textContent = `${h}:${m}:${s}`;
}

function start() {
  if (!isRunning) {
    timer = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 1000);
    isRunning = true;
  }
}

function pause() {
  clearInterval(timer);
  isRunning = false;
}

function reset() {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
  isRunning = false;
}

function lap() {
  const laps = document.getElementById("laps");
  const h = String(hours).padStart(2, "0");
  const m = String(minutes).padStart(2, "0");
  const s = String(seconds).padStart(2, "0");
  const li = document.createElement("li");
  li.textContent = `Lap: ${h}:${m}:${s}`;
  laps.appendChild(li);
}
