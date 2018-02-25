// here is the example you asked us to use, its confusing but i got the pow calculation from it.
//function computeNum() {
	// Input - get input and validate if correct length and if a number
	//var textInput = get("aNum").value;
	//if (textInput.length < 3 || isNaN(textInput)) return; // Validation return nothing
	
	// Processing - multiply by the a random number taken to the 3rd power
	//var theNumber = parseInt(textInput); // OK - parse string to number
	//var theValue = theNumber * Math.pow(Math.random(), 3);
	
	// Output - output to the div and round the number value to two decimal places
	//get("output").innerHTML = "The value is <strong>" + theValue.toFixed(2) + "</strong>!";
//}

//function get(e) { return document.getElementById(e); }

//windspeed = 1;
//airtemp = 20;

//var s = windspeed[ws];
//var t = airtemp[at];

//windchill = (35.74 + 0.6215 *(t - 35.75)*(Math.pow(s, 0.16))+ 0.4275t s * Math.pow(t, 0.16));

//document.write(windchill);






var wind = 1;
var temp = 20;
var chill = (0.0817 * (3.71 * (Math.pow(wind, 0.5))+
5.81-0.25 * wind) * (temp-91.4)+91.4);

document.write(chill);

