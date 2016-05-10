$(document).ready( function() {

	//View More Btn Function
	$("#package1-btn").click(function () {
		console.log("clicked");
	    $("#package1-hide").css("display", "block");
	    $("#package1-btn").css("display", "none");
	});

	$("#package2-btn").click(function () {
	    $("#package2-hide").css("display", "block");
	    $("#package2-btn").css("display", "none");
	});

	//Restart Animation on Slide Change
	$(".slide-changer").click(function () {
		$(".pro-barr").removeClass('pro-bar').animate({'nothing':null}, 1, function () {
			$(this).addClass('pro-bar');
		});
	});

	//Adding touch to carousel
	$("#carousel-example-generic").swiperight(function() {  
		$(this).carousel('prev');
		$(".pro-barr").removeClass('pro-bar').animate({'nothing':null}, 1, function () {
			$(this).addClass('pro-bar');
		});
	});  
	$("#carousel-example-generic").swipeleft(function() {  
		$(this).carousel('next');
		$(".pro-barr").removeClass('pro-bar').animate({'nothing':null}, 1, function () {
			$(this).addClass('pro-bar');
		});
	});  


	//Adding Touch to Top Selling Carousel
	$("#carousel-top-selling").swiperight(function() {  
		$(this).carousel('prev');
	});  
	$("#carousel-top-selling").swipeleft(function() {  
		$(this).carousel('next');
	});  

});