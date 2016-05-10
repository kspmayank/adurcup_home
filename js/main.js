$(document).ready( function() {
	$("#package1-btn").click(function () {
		console.log("clicked");
	    $("#package1-hide").css("display", "block");
	    $("#package1-btn").css("display", "none");
	});

	$("#package2-btn").click(function () {
	    $("#package2-hide").css("display", "block");
	    $("#package2-btn").css("display", "none");
	});

	$(".slide-changer").click(function () {
		$(".pro-barr").removeClass('pro-bar').animate({'nothing':null}, 1, function () {
			$(this).addClass('pro-bar');
		});
	});
});