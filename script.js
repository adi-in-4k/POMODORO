// const start = document
//   .querySelector(".startBtn")
//   .addEventListener("click", function () {
//     let time = 1 * 60;
//     const timer = setInterval(() => {
//       if (time <= 0) {
//         clearInterval(timer);
//         console.log("time ends");
//       } else {
//         time--;
//         console.log(time);
//       }
//     }, 1000);
//   });

// // console.log(start);
// document.querySelector(".pauseBtn");
// document.querySelector(".resetBtn");
// document.querySelector(".resumeBtn");
// document.querySelector(".num");
// const inner = document.getElementById(timer);

// const timer = function () {
//   if (timer < 0) {
//     clearInterval();
//   } else {
//     timer--;
//   }
// };

let time = 1 * 60; // 1 minute (60 seconds)
let timerId; // To store the timer ID so it can be paused/resumed
const timerElement = document.getElementById("timer");

// Start Button
document.querySelector(".startBtn").addEventListener("click", function () {
  if (!timerId) {
    // Only start if no timer is running
    timerId = setInterval(updateTimer, 1000);
  }
});

// const start = document
//   .querySelector(".startBtn")
//   .addEventListener("click", function () {
//     let time = 1 * 60; // 1 minute (60 seconds)
//     const timerElement = document.getElementById("timer"); // Get the timer element

//     const timer = setInterval(() => {
//       if (time <= 0) {
//         clearInterval(timer); // Stop the timer when time reaches 0
//         timerElement.textContent = "00:00"; // Display 00:00 when finished
//       } else {
//         time--; // Decrease time by 1 second
//         let minutes = Math.floor(time / 60); // Get minutes
//         let seconds = time % 60; // Get remaining seconds
//         // Format the time with leading zeros
//         timerElement.textContent = `${minutes
//           .toString()
//           .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
//       }
//     }, 1000); // Interval set to 1 second
//   });

// Pause Button
document.querySelector(".pauseBtn").addEventListener("click", function () {
  clearInterval(timerId); // Stop the interval
  timerId = null; // Clear the stored interval ID
});

// Resume Button
document.querySelector(".resumeBtn").addEventListener("click", function () {
  if (!timerId) {
    // Resume only if there's no active timer
    timerId = setInterval(updateTimer, 1000);
  }
});

// Reset Button
document.querySelector(".resetBtn").addEventListener("click", function () {
  clearInterval(timerId); // Stop the timer
  timerId = null; // Reset the timer ID
  time = 1 * 60; // Reset the time to the original value
  updateTimer(); // Update the display immediately
});

// Function to update the timer display
function updateTimer() {
  if (time <= 0) {
    clearInterval(timerId); // Stop the timer when time reaches 0
    timerElement.textContent = "00:00"; // Display 00:00 when finished
    timerId = null;
  } else {
    time--; // Decrease time by 1 second
    let minutes = Math.floor(time / 60); // Get minutes
    let seconds = time % 60; // Get remaining seconds
    // Format the time with leading zeros
    timerElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }
}
