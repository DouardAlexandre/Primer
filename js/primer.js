

$(window).ready(function() {

	let scroll_arch=0;
	
	//pagepiling
	$('#pagepiling').pagepiling({

		afterLoad: function(anchorLink,index){

			//section 1......................................................

			if(index === 1){

				//First paragraph
				$(".firstTitle").animate({"margin-top": '1rem'}, "slow").fadeIn();
            	$(".firstText").fadeIn();
            	//second paragraph
            	//$(".secondTitle").css({"margin-top": '-.5rem'}, "slow").fadeOut();
            	//$(".secondText").fadeOut();
            	 //third paragraph
            	//$(".thirdTitle").animate({"margin-top": '-.5rem'}, "slow").fadeOut();
            	//$(".thirdText").fadeOut();
            	//fourth paragraph
            	//$(".fourthTitle").animate({"margin-top": '-.5rem'}, "slow").fadeOut();
            	//$(".fourthText").fadeOut();

		        //section color
				$(".section").css('background-color', '#4FD0EA');
				//background section 2
				$(".bg_rect").animate({"margin-top": '0rem'}, "slow");
				//scroll up from section 2
				if(scroll_arch>0){
					scroll_arch=0;
					$(".bg_arch").animate({top: '-30rem'}, "slow");
					setTimeout(function(){ 
						$(".screen2").animate({"margin-top": '30rem'}, "slow");
					}, 700);
				}
			}

            //section2......................................................

            if(index === 2){

            	scroll_arch=1;
                //First paragraph
            	$(".firstTitle").animate({"margin-top": '-.5rem'}, "slow").fadeOut();
            	$(".firstText").fadeOut();
            	//second paragraph
            	$(".secondTitle").css("opacity": '1');
            	$(".secondText").css("opacity": '1');
            	$(".secondTitle").animate({"margin-top": '-.5rem'}, "slow").fadeIn();
            	$(".secondText").fadeIn();
                //section color
            	$(".section").css('background-color', '#69B982');
            	//background 1--2--3
            	$(".bg_arch").animate({top: '-105rem'}, "slow");
            	$(".bg_rect").animate({"margin-top": '-65rem'}, "slow");
            	$(".bg_cloud").animate({"margin-top": '0rem'}, "slow");
            	//phone bakground
            	setTimeout(function(){ 
            		$(".screen3").animate({"margin-top": '30rem'}, "slow");
            		$(".screen2").animate({"margin-top": '0'}, "slow");
            	}, 500);	
            }

			//section3......................................................

			if(index === 3){
				
                //second paragraph
            	$(".secondTitle").animate({"margin-top": '-.5rem'}, "slow").fadeOut();
            	$(".secondText").fadeOut();
            	//third paragraph
            	$(".thirdTitle").animate({"margin-top": '-.5rem'}, "slow").fadeIn();
            	$(".thirdText").fadeIn();
                //fourth paragraph
            	$(".fourthTitle").animate({"margin-top": '-.5rem'}, "slow").fadeOut();
            	$(".fourthText").fadeOut();

				$(".napkin").css('opacity','0');
				$(".section").css('background-color', '#4CB7B8');
				$(".bg_rect").css("margin-top",'-150rem');
				$(".bg_square").css("margin-top",'150rem');
				$(".bg_cloud").animate({"margin-top":'-55rem'}, "slow");
				setTimeout(function(){ 
					
					$(".screen3").animate({"margin-top": '-26.2rem'}, "slow");
					$(".screen4").animate({"margin-top": '0'}, "slow");
				}, 700);
			}

			//section4......................................................

			if(index === 4){

                //third paragraph
            	$(".thirdTitle").animate({"margin-top": '-.5rem'}, "slow").fadeOut();
            	$(".thirdText").fadeOut();
            	//fourth paragraph
            	$(".fourthTitle").animate({"margin-top": '-.5rem'}, "slow").fadeIn();
            	$(".fourthText").fadeIn();
				$(".section").css('background-color', '#A5D370');
				$(".bg_cloud").css('margin-top','-150rem');
				$(".bg_square").animate({"margin-top": '-70rem'}, "slow");
				setTimeout(function(){ 
					$(".screen4").animate({"margin-top": '-26.2rem'}, "slow");
				}, 700);
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
});


