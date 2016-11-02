$(function(){
	// $('a[href ^= "#"]').click(function(a) {
 //        a.preventDefault();
 //    })
    $( "#menu-toggler" ).click(function() {
      $( "#sticky-header-sticky-wrapper" ).css('height', 'auto');
      $( "#m-nav-menu" ).toggleClass("show hide");
    });


    $("#sticky-header").sticky({
    	topSpacing: 0,
    	zIndex: 2
    });
	$('#sticky-header').on('sticky-start', function() {
		// console.log("Started");
	});
	$('#sticky-header').on('sticky-end', function() {
		// console.log("Ended");
		$('#sticky-header-sticky-wrapper').css('height', 'auto');
	});

    $(".owl-carousel").owlCarousel({
        items: 4,
        margin: 30,
        nav: true
    });
})

