let counter = document.getElementById("showCount");

let incrementButton = document.getElementById("incrementButton");

let decrementButton = document.getElementById("decrementButton");

let changeBy = document.getElementById("skipCount"); // we should not get the value here. Beacuse whatever the input we give, it'll take the value 1 only

incrementButton.addEventListener("click", () => {
  let countValue = parseInt(counter.innerText);
  const changeByValue = parseInt(changeBy.value);
  counter.innerText = countValue + changeByValue;
});

decrementButton.addEventListener("click", () => {
  let countValue = parseInt(counter.innerText);
  const changeByValue = parseInt(changeBy.value);
  counter.innerText = countValue - changeByValue;
});

function resetCounter() {
  counter.innerText = "0";
  changeBy.value = 1;
}

// // Get the initial count value
// let showCount = parseInt(document.getElementById("showCount").innerHTML);

// // Function to handle input number change
// function inputNumberChange() {
//   let inputElement = document.getElementById("skipCount");
//   let inputValue = parseInt(inputElement.value);
// }

// // Function to increment the counter
// document
//   .getElementById("incrementButton")
//   .addEventListener("click", function () {
//     let inputElement = document.getElementById("skipCount");
//     let inputValue = parseInt(inputElement.value);
//     if (!isNaN(inputValue)) {
//       showCount += inputValue;
//     } else {
//       showCount += 1;
//     }
//     document.getElementById("showCount").innerHTML = showCount;
//   });

// // Function to decrement the counter
// document
//   .getElementById("decrementButton")
//   .addEventListener("click", function () {
//     let inputElement = document.getElementById("skipCount");
//     let inputValue = parseInt(inputElement.value);
//     if (!isNaN(inputValue)) {
//       showCount -= inputValue;
//     } else {
//       showCount -= 1;
//     }
//     document.getElementById("showCount").innerHTML = showCount;
//   });

// // Function to reset the counter
// function resetCounter() {
//   document.getElementById("showCount").innerHTML = "0";
//   document.getElementById("skipCount").value = "";
// }
