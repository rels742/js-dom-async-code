let countdownNumber = 10;
let countdownTimer = setInterval(function () {
  if (countdownNumber <= 0) {
    clearInterval(countdownTimer);
    document.getElementById("countdown").innerHTML = "Completed!";
    document.getElementById("countdown").style.color = "red";
  } else {
    document.getElementById("countdown").innerHTML = countdownNumber;
  }
  countdownNumber -= 1;
}, 1000);

// const startingNumber = document.querySelector(".countdown-number");

// // var intervalID = setInterval(countdown, 5000, 2000);

// console.log("Starting");

// function countdown() {
//   startingNumber.innerHTML = 10;
//   for (let i = 10; i >= startingNumber; i--) {
//     return (i -= startingNumber);
//   }
// }

// console.log(countdown());

// setTimeout(countdown, 2000);

// console.log("Completed!");

// clearInterval();
