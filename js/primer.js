

$(document).ready(function() {

	let scroll_arch=0;
	let scroll_rect=0;
	let scroll_cloud=0;
	let scroll_square=0;

	//$(".screen2").css("opacity", "0");

	//pagepiling
	$('#pagepiling').pagepiling({

		afterLoad: function(anchorLink,index){

			//section 1......................................................

			if(index === 1){

				scroll_rect=1;
				$(".section").css('background-color', '#4FD0EA');
				//$(".screen2").css("opacity", "0");
				//$(".bg_arch").css('top','-95rem');
				$(".bg_rect").animate({top: '0rem'}, "slow");
				//$(".screen2").css({top: '60rem'}, "slow");
				if(scroll_arch>0){
					setTimeout(function(){ 
						$(".screen2").animate({"margin-top": '30rem'}, "slow");

					}, 700);
					$(".bg_arch").animate({top: '-30rem'}, "slow");
					scroll_arch=0;
				}
			}

            //section2......................................................

            if(index === 2){
            	scroll_arch=1;
            	$(".section").css('background-color', '#69B982');
            	$(".bg_arch").animate({top: '-105rem'}, "slow");
            	
            	setTimeout(function(){ 
            		$(".screen2").animate({"margin-top": '0'}, "slow");
            	}, 500);
            	
            	
            	$(".bg_rect").animate({top: '-65rem'}, "slow");
            	$(".bg_cloud").animate({top: '0rem'}, "slow");
            }

			//section3......................................................

			if(index === 3){

				scroll_rect=1;
				$(".napkin").css('opacity','0');
				$(".section").css('background-color', '#4CB7B8');
				$(".bg_rect").css("top",'-150rem');
				//$(".bg_rect").css('opacity','0');
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


