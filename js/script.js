$(document).ready(function() {
	var submit = ".submit";
	var main = $(".main")
	$(submit).mousedown(function() {
		var value = $(".input-text").val();
		var valNumber = +value;
		if (isNaN(valNumber)) {
			alert("Please enter a real number!");
		}
		else if (valNumber % 1 != 0) {
			alert("Please provide a whole number.")
		}
		else {
			main.addClass("testing");
			for (var i = 1; i <= valNumber; i++) {
				if ((i % 3 == 0) && (i % 5 == 0)) {
					main.append("<p>FizzBuzz</p>");
				}
				else if (i % 3 == 0) {
					main.append("<p>Fizz</p.");
				}
				else if (i % 5 == 0) {
					main.append("<p>Buzz</p>");
				}
				else {
					main.append("<p>" + i + "</p>");
				}
			}
		}
	});
	$(".clear").mousedown(function () {
		main.remove();
	});
});