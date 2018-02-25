

function computeNum() {
	// Input - get input and validate if correct length and if a number
	var textInput = get("aNum").value;
	if (textInput.length < 3 || isNaN(textInput)) return; // Validation return nothing
	
	// Processing - multiply by the a random number taken to the 3rd power
	var ta = 75
	var v = 3
	var theNumber = parseInt(textInput); // OK - parse string to number
	var theValue = theNumber * 35.74 + (0.6215 * ta) - 35.75 * Math.pow(v,0.16) + 0.4275 * ta * Math.pow(v, 0.16);
	
	// Output - output to the div and round the number value to two decimal places
	get("output").innerHTML = "The value is <strong>" + theValue.toFixed(2) + "</strong>!";
}

function get(e) { return document.getElementById(e); }
