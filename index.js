/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
const hour = parseInt(time)
if (hour < 12) {return "Good Morning"}
if (hour > 17) {return "Good Evening"}
return "Good Afternoon"
}

function displayMessage(string) {
  document.querySelector('#greeting').innerText = string
}
/* Write your implementation of displayMessage() */
