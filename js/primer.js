

$(document).ready(function() {
	$(".screenshot2").css("opacity", "0");
	$('#pagepiling').pagepiling({
		afterLoad: function(anchorLink,index){
			//section 1
			if(index === 1){
				$(".section").css('background-color', '#4FD0EA');
				$(".screenshot2").css("opacity", "0");
				$(".screenshot2").animate({height: '0'}, "slow");
			}
            //section2
			if(index === 2){
				$(".section").css('background-color', '#69B982');
				$(".bg_rect").css('opacity','1');
				$(".screenshot2").css("opacity", "1");
				$(".screenshot2").animate({height: '825px'}, "slow");
			}
			//section3
			if(index === 3){
				$(".section").css('background-color', '#4CB7B8');
				$(".bg_rect").css('opacity','0');
			}
			//section4
			if(index === 4){
				$(".section").css('background-color', '#A5D370');
				$(".bg_rect").css('opacity','0');
			}
		},
		direction: 'vertical',
		verticalCentered: true,
		scrollingSpeed: 100,
		easing: 'swing',
		//loopBottom: false,
		//loopTop: false,
		css3: true,
		navigation:false,
		normalScrollElements: null,
		normalScrollElementTouchThreshold: 5,
		touchSensitivity: 5,
		keyboardScrolling: true,
		sectionSelector: '.section',
		animateAnchor: false
	});


	
	//$.fn.pagepiling.setScrollingSpeed(400);

	

});


