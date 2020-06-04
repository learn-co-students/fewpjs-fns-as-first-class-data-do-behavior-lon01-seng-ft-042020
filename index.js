/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  const hourInt = parseInt(timeString.split(":")[0]);
  if (hourInt < 12){
    return "Good Morning"
  } else if (hourInt < 17 ){
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}


/* Write your implementation of displayMessage() */


function displayMessage(string){
  const greetingElement = document.getElementById("greeting");
  greetingElement.innerText = string;
 }