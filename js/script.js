$(document).ready(function() {
	var submit = ".submit";
	$(submit).mousedown(function() {
		console.log("click");
		var value = $(".input-text").val();
		var valNumber = +value;
		if (isNaN(valNumber)) {
			console.log("Please log a number");
			console.log(typeof value);
		}
	});
});