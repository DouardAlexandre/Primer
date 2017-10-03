

$(document).ready(function() {

	let scroll_arch=0;
	let scroll_rect=0;
	let scroll_cloud=0;
	let scroll_square=0;

	$(".screen2").css("opacity", "0");

	//pagepiling
	$('#pagepiling').pagepiling({

		afterLoad: function(anchorLink,index){

			//section 1......................................................

			if(index === 1){

				scroll_rect=1;
				$(".section").css('background-color', '#4FD0EA');
				$(".screen2").css("opacity", "0");
				$(".bg_arch").css('top','-75rem');
				$(".bg_rect").animate({top: '0rem'}, "slow");
				$(".screen2").animate({height: '0'}, "slow");
				if(scroll_arch>0){
					$(".bg_arch").animate({top: '-30rem'}, "200");
					scroll_arch=0;
					
				}
			}

            //section2......................................................

            if(index === 2){
            	scroll_arch=1;
            	$(".section").css('background-color', '#69B982');
            	$(".bg_arch").animate({top: '-75rem'}, "slow");
            	$(".screen2").css("opacity", "1");
            	$(".bg_rect").css('opacity','1');
            	$(".bg_rect").animate({top: '-65rem'}, "slow");
            	$(".bg_cloud").animate({top: '0rem'}, "slow");
            }

			//section3......................................................

			if(index === 3){

				scroll_rect=1;
				$(".napkin").css('opacity','0');
				$(".section").css('background-color', '#4CB7B8');
				$(".bg_rect").css("top",'-150rem');
				$(".bg_rect").css('opacity','0');
				$(".bg_cloud").animate({top: '-75rem'}, "slow");
			}

			//section4......................................................

			if(index === 4){

				$(".section").css('background-color', '#A5D370');
				$(".bg_rect").css('opacity','0');
				$(".bg_rect").animate({top: '0'}, "slow");
			}
		},
		direction: 'vertical',
		verticalCentered: true,
		scrollingSpeed: 200,
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
});


