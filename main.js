
// //print
// console.log("hello");

// //variables

// //
// const myCourse = "DS4200";
// console.log(myCourse);

// //myCourse = "DS2000";

// let season = "Winter";
// console.log(season);

// season = "Spring";
// console.log(season);

// //var x = 7;

// console.log(typeof(season));

// let hwDue = true;
// console.log(typeof(hwDue));

// let faveNum = 6;
// console.log(typeof(faveNum));

// faveNum = "six"
// console.log(typeof(faveNum));

// function tenTimes(num) {
// 	let result = num * 10;
// 	return result;
// }

function buttonClicked(num) {
	console.log("button was clicked");

	let buttonDiv = document.getElementById("button-div");
	buttonDiv.innerHTML = "Number of times button clicked: "+ num + 1;
}

let ans = tenTimes(6);

console.log(ans);