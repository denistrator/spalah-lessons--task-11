$(function(){
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
})

