$(function() {
    //Simple filter controls
    $('.gallery_filter li').click(function() {
        $('.gallery_filter li').removeClass('active');
        $(this).addClass('active');
    });
    
});
<!-- Kick off Filterizr -->
$(function() {
            //Initialize filterizr with default options
            $('.filtr-container').filterizr();
});


/* For Count To 
	Means For Important fact count to section 
*/  
(function($) {
    "use strict";
    $(function(){
        // AMIMATED NUMBER
        $('.important_fact_number').appear(function(){
            setTimeout(function(){
                $('.important_fact_number .number').countTo();
            },1000);
        });

        $('.pricing').appear(function(){
            setTimeout(function(){
                $('.pricing .inner-number').countTo();
            },1000);
        });

       	
		// owl carousel slider logos
        $('.carousel-logos').owlCarousel({
            margin: 115,
            loop: true,
            //lazyLoad: true,
            nav: false,
            autoplay:true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    margin: 30,
                },
                320: {
                    items: 3,
                    margin: 40,
                },
                480: {
                    items: 3,
                    margin: 50,
                },
                600: {
                    items: 4,
                    margin: 90,
                },
                768: {
                    items: 5,
                    margin: 60,
                },
                1024: {
                    items: 5,
                    margin: 90,
                },
                1025: {
                    items: 6
                }
            }
        });
		
		
		$(window).load(function() {
			shw_slider_carousel();
			shw_responsive_table();
	
		});
		
    });

})(jQuery);

