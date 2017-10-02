$(window).ready(function() {


	let hauteur = $(window).height();
	$('.section')
	.height(hauteur)
	.scrollie({
		//direction : 'both',
		scrollOffset : -50,
		scrollRatio : 2,
		scrollingInView : function(elem) {
			var bgColor = elem.data('background');
			$('body').css('background-color', bgColor);

		}
	});



	$('#pagepiling').pagepiling({
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