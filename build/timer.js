"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timer = void 0;
function timer(duration) {
    var timerElement = document.createElement("p");
    var totalSeconds = duration;
    var minutes = 0;
    var seconds = 0;
    var countdownClock = setInterval(function () {
        minutes = Number(totalSeconds / 60);
        seconds = Number(totalSeconds % 60);
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        else {
            seconds = seconds;
        }
        if (--totalSeconds < 0) {
            clearInterval(countdownClock);
        }
        timerElement.textContent = "".concat(minutes, ":").concat(seconds);
        timerElement.style.position = "absolute";
        timerElement.style.top = 10 + "%";
        timerElement.style.left = 45 + "%";
        timerElement.style.fontSize = 80 + "px";
        timerElement.style.zIndex = 2;
        document.body.append(timerElement);
    }, 1000);
}
exports.timer = timer;
// You can create a countdown timer in JavaScript that follows the format "MM:SS" by using the setInterval function to update the timer every second. Here's an example implementation:
// javascript
// Copy code
// function startCountdown(duration) {
//   let timer = duration;
//   let minutes, seconds;
//   let countdownInterval = setInterval(function () {
//     minutes = parseInt(timer / 60, 10);
//     seconds = parseInt(timer % 60, 10);
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;
//     // Display the time in the format "MM:SS"
//     console.log(minutes + ":" + seconds);
//     if (--timer < 0) {
//       clearInterval(countdownInterval);
//       console.log("Countdown finished!");
//     }
//   }, 1000);
// }
// // Usage:
// startCountdown(120); // Starts a countdown for 2 minutes (120 seconds)
// In this example, the startCountdown function takes a duration in seconds and initializes a timer with that value. Inside the setInterval function, the timer is decremented by 1 every second (--timer). The minutes and seconds are calculated using integer division (parseInt(timer / 60, 10)) and modulus (parseInt(timer % 60, 10)).
// The minutes and seconds are then formatted with leading zeros if necessary (minutes < 10 ? "0" + minutes : minutes) and (seconds < 10 ? "0" + seconds : seconds), and then displayed in the console or you can modify it to update the HTML on your webpage.
// The countdown stops when the timer reaches 0, and the clearInterval function is called to stop the interval from running.
// function startCountdown(duration) {
//   let timer = duration;
//   let minutes, seconds;
//   let countdownInterval = setInterval(function () {
//     minutes = parseInt(timer / 60, 10);
//     seconds = parseInt(timer % 60, 10);
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;
//     // Display the time in the format "MM:SS"
//     console.log(minutes + ":" + seconds);
//     if (--timer < 0) {
//       clearInterval(countdownInterval);
//       console.log("Countdown finished!");
//     }
//   }, 1000);
// }
// // Usage:
// startCountdown(120); // Starts a countdown for 2 minutes (120 seconds)
