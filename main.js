
let num = 0; 

function buttonClicked(){ 
	num = num + 1; 
	let newText = "button was clicked " + num + " times"; 
	//select the element 
	let buttonDiv = document.getElementById("button-div"); 
	buttonDiv.innerHTML = newText; 