document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

//Returns Good Morning before 12pm
//Returns Good Afternoon between 12pm and 5pm 
//Returns Good Evening after 5pm
function greet(time) { 
  if (parseInt(time) < 12) {return "Good Morning"} 
  else if (parseInt(time) >= 12 && parseInt(time) <= 17) { return "Good Afternoon"}
  else { return "Good Evening" } ;
}

//Updates the DOM with an appropriate message
function displayMessage(timeMessage) {
 let header = document.querySelector("#greeting")
 return header.innerText = timeMessage ;
}
