const table = document.querySelector(".container");
const row1 = document.querySelector(".row1");
const cells = document.querySelectorAll(".row");
const userInput = document.querySelector("#target");
const btnFire = document.querySelector(".fire");
const arrayCells = [...cells]; // array

let target = function (event) {
  event.preventDefault();
  let userChoice = +userInput.value;
  arrayCells[userChoice].textContent = "Boom";
};

btnFire.addEventListener("click", (e) => target(e));

// btnFire.addEventListener("click", target.bind(null, userChoice));
