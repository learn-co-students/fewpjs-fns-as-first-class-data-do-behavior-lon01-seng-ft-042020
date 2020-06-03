/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
greetingNode = document.querySelector('h1#greeting')
/* Write your implementation of greet() */
function greet(time){
  // let timeString = time.toString;
  let timeSplit = time.replace(':',"");
  let timeInt = parseInt(timeSplit)/100;
  // debugger
  if (timeInt < 12) {
    return "Good Morning";
  } else if (timeInt < 17) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
}
/* Write your implementation of displayMessage() */
function displayMessage(string){
greetingNode.textContent = string
}