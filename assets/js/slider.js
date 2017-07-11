(function($) {
	
	

	$(document).ready(function() {
		
		/* for slider background */
		if($("#slide_bg").length>0) {
			$.backstretch([
				"assets/img/header.jpg",
				"assets/img/header2.jpg",
				"assets/img/header3.jpg"
			], {
				fade:750,
				duration:4000
			});
		}
		
		/* for video background */
		if($("#video_bg").length>0) {
			$("#video_bg").tubular({
				videoId:"fTl0c_M7sQA",
				start:0,
				mute:true
			});
		}

	});
	
})(jQuery);