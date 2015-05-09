$(document).ready(function() {
	var submit = ".submit";
	$(submit).mousedown(function() {
		var value = $(".input-text").val();
		var valNumber = +value;
		if (isNaN(valNumber)) {
			alert("Please enter a real number!");
			console.log(typeof value);
		}
		else {
			for (var i = 1; i <= valNumber; i++) {
				if ((i % 3 == 0) && (i % 5 == 0)) {
					console.log("Fizzbuzz");
				}
				else if (i % 3 == 0) {
					console.log("Fizz");
				}
				else if (i % 5 == 0) {
					console.log("Buzz");
				}
				else {
					console.log(i);
				}
			}
		}
	});
});