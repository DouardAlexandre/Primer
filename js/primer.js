

$(document).ready(function() {


	
	var $target = $('body');
	
	$('.section').on('inview', function(el){
		var color = $(el).attr('data-background');
		$target.css('background-color', color );
	});
	/*let hauteur = $(window).height();
	$('.section')
	.height(hauteur)
	.scrollie({
		//direction : 'both',
		scrollOffset : -50,
		//scrollRatio : 2,
		scrollingInView : function(elem) {
			var Color = $(elem).attr('data-background-color');
			$('#pagepiling').css('background-color', Color);

		}
	});*/



	$('#pagepiling').pagepiling({
		//sectionsColor: ['#4FD0E0', '#2ebe21', '#2C3E50', '#51bec4'],
		direction: 'vertical',
		verticalCentered: true,
		scrollingSpeed: 300,
		easing: 'swing',
		loopBottom: false,
		loopTop: false,
		css3: true,
		navigation:false,
		normalScrollElements: null,
		normalScrollElementTouchThreshold: 5,
		touchSensitivity: 5,
		keyboardScrolling: true,
		sectionSelector: '.section',
		animateAnchor: false,

	});

	//$.fn.pagepiling.setScrollingSpeed(400);

	

});