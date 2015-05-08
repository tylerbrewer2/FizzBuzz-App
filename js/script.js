$(document).ready(function() {
	var main = ".main";
		for (var i = 1; i <= 100; i++) {
			if ((i % 3 == 0) && (i % 5 ==0)) {
				$(main).append("<p>fizzbuzz</p>");
			}
			else if (i % 3 == 0) {
				$(main).append("<p>fizz</p>");
			}
			else if (i % 5 == 0) {
				$(main).append("<p>buzz</p>");
			}
			else {
				$(main).append("<p>" + i + "</p>");
			}
		}
});