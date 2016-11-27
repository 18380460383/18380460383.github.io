;(function($){
	
			$(window).resize(function() {
				var width1 = $(document.body).width();
				if(width1 >= 430) {
					$("#top_title").css({
						'left': width1 / 2 - 200
					});
				} else {
					$("#top_title").css({
						'left': width1 / 2 - (width1 / 2)
					});
				}
			});
			$(document).ready(function() {
				var width = $(document.body).width();
				if(width >= 430) {
					$("#top_title").css({
						left: width / 2 - 200
					});
				} else {
					$("#top_title").css({
						left: width / 2 - (width / 2)
					});
				}
			});
				$("#top_back").click(function  () {
				window.history.go(-1);
			});
	
}(window.jQuery))