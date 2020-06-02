/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeSt) {
  const hour = parseInt(timeSt, 10)

  if (hour < 12) {
    return 'Good Morning'
  } 
  else if (hour > 17) {
    return 'Good Evening'
  }
   else {
    return 'Good Afternoon'
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  document.getElementById('greeting').innerText = string
}

