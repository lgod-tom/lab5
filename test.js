

//Static temp conversion with set temperature variables 


/*var ftemp = 80;

var ctemp = (ftemp - 32) * (5/9);

console.log("80 degrees fahrenheit is " + ctemp + " degrees celcius");

var ctempy = 32;

var ftempy = (ctempy * 1.8) + (32);

console.log("32 degrees celcius is " + ftempy + " degrees fahrenheit"); */


//Asking for an input in fahrenheit and returning the coverted temp in celcius


function ftempConvert() {
    var input = prompt("Enter a temperature in degrees fahrenheit");
    var ctemp = (input - 32) * (5/9);

    if (input !=null) {
    	document.getElementById("temp").innerHTML =
    	input + " degrees fahrenheit is " + ctemp + " degrees celcius";
    }
}


function ctempConvert() {
	var ctempy = prompt("Enter temperature in degrees celcius");
	var ftempy = (ctempy * 1.8) + 32;

		if (ctempy !=null) {
			document.getElementById("ctempc").innerHTML =
			ctempy + " degrees celcius is " + ftempy + " degrees fahrenheit";
		}
}




