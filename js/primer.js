$(document).ready(function() {
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

	let hauteur = $(window).height();
	$('.section').height(hauteur).scrollie({
		scrollOffset : -50,
		scrollingInView : function(element) {
			var bgColor = element.data('background');
			$('body').css('background-color', bgColor);

		}
	});

});