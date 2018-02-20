

$(document).ready(function(){

	// Joy
	$('#joy').click(function() {

		var i;
		
		for (i = 0; i < 6; i++) {
			$('#boxyJoy').animate({

	  			'margin-top': '-250px'

			},150, 'easeOutQuad');

	 		$('#boxyJoy').animate({

	  			'margin-top': '0px' 

	 		},150, 'easeInQuad');
		}

	  
	})




	// Sadness
 	$('#sadness').click(function(){


 		var i;
		
		for (i = 0; i < 5; i++) {
			$('#boxySadness').animate({

 				'width': 80,
 				'height': 31.25,
 				'margin-top': 18.75,
 				


 			}, 2000 + 200 * i, 'easeOutSine');

 			$('#boxySadness').animate({

 				'width': 50,
 				'height': 50,
 				'margin-top': 0,
 				'margin-left': 30 + 30 * i 


 			}, 2000 + 200 * i, 'easeOutSine');
		}

 		

 	})



 	// Frustration

	$('#frustration').click(function() {

		

		$('#wallFrustration').animate({
			'opacity': 1.0
		},500);

		for (i = 0; i < 6; i++) {
			$('#boxyFrustration').delay(200).animate({

	  			'margin-left': '50px'

	 		},500, 'easeOutBounce');

	 		$('#boxyFrustration').delay(200).animate({

	  			'margin-left': '0px'

	 		},300);
		};

		$('#wallFrustration').delay(10000).animate({
			'opacity': 0
		},500)
		


		



	  
	})



	//Approval
	$('#approval').click(function(){


		$('#boxyApproval').animate({
			'margin-top': -200
		}, 500, 'easeOutQuad')

		
		$('#boxyApproval').animate({

			'margin-left': 100,
			'margin-top': -85,
			
			'border-radius': 20,
			'background-color': '#0f0'

			

		}, 1000, 'easeInQuad');

		$('#boxyApproval').animate({

			'margin-left': 320,
			'margin-top': -235,
			'width': 100,
			'height':100,
			'border-radius': 100,
			'background-color': '#0f0'
			

		}, 1000, 'easeOutQuad');


		$('#boxyApproval').delay(1000).animate({
			'opacity': 0
		}, 500)


		$('#boxyApproval').delay(1000).animate({
			'margin-left': 0,
			'margin-top': 0,
			'width': 50,
			'height':50,
			'border-radius': 0,
			'background-color': '#ddd'
		}, 500)

		$('#boxyApproval').delay(1000).animate({
			'opacity': 1.0
		}, 500)
		


	})



	// Indecision
	$('#indecision').click(function(){

		
		var j;


		for (var j = 0; j <= 20; j++) {
			
			$('#boxyIndecision').delay(10).animate({
				
				'margin-left':  122 - (0.3 * j * j + 0.1 * j),
				
			}, 10, 'easeInOutCubic');
			
			$('#boxyIndecision').delay(10).animate({
				
				'margin-left': -(122 - 0.3 * j * j - 0.1 * j)
				
			}, 10, 'easeInOutCubic');
			

			
		}




	})

	  



})



//anime.js

// Disapproval
var boxyDisapp = anime({
  	targets: '#boxyDisapproval',
  	width: '100px',
  	height: '100px',
  	left: '250px',
  	top: '130px',
  	backgroundColor: '#D3000B',
  	borderRadius: '100%',
  	rotate: '2turn',
  	delay: 500,
  	easing: 'easeInOutQuad',
  	autoplay: false
}); 

document.querySelector('#disapproval').onclick = boxyDisapp.restart;



//Surprise
var free = anime.timeline({
  direction: 'alternate',
  loop: 2,
  autoplay: false
});



free
  .add({
    targets: '.boxyFreeThree-1',
    translateX: [ { value: -50 } ],
    translateY: [ { value: -30 }],
    backgroundColor: {value: '#52B85C'},
    duration: 500
  })
  .add({
    targets: '.boxyFreeThree-2',
    translateX: [ { value: -30 }],
    translateY: [ { value: 10 } ],
    backgroundColor: {value: '#52B85C'},
    duration: 500,
    offset: 0
  })
  .add({
    targets: '.boxyFreeThree-3',
    translateX: [ { value: 40 } ],
    translateY: [ { value: -60 } ],
    backgroundColor: {value: '#52B85C'},
    duration: 500,
    offset: 0
  })
  .add({
    targets: '.boxyFreeThree-4',
    translateX: [ { value: 20 }],
    translateY: [ { value: 10 } ],
    backgroundColor: {value: '#52B85C'},
    duration: 500,
    offset: 0
  });


  document.querySelector('#freethree').onclick = free.restart;



// Victory
var boxyVic = anime ({
 	targets: '#boxyVictory',
  	
  	translateX: [
	  	{value: 200, duration: 1000},
	  	{value: 0, duration: 800}
  	],

  	rotate: {
  		value: '2turn',
  		easing: 'easeInOutSine'
  	},
  	
  	
  	
  	autoplay: false


}); 

document.querySelector('#victory').onclick = boxyVic.restart;






//jQuery

$(document).ready(function(){

	//Defeat
	
	$('#defeat').click(function() {

		
			$('#enemy').animate({
				'opacity': 1.0

	 		}, 10);

			$('#boxyDefeat').delay(500).animate({

	  			'margin-left': '250px'

			},1000, 'easeOutQuad');

	 		$('#enemy').delay(500).animate({

	  			'width': 200,
	  			'margin-left': 200 

	 		},1000, 'easeOutQuad');


	 		$('#boxyDefeat').delay(500).animate({

	  			'margin-left': 270

			},500, 'easeOutQuad');

	 		$('#enemy').delay(500).animate({

	  			'width': 180,
	  			'margin-left': 220 

	 		},500, 'easeOutQuad');

	 		$('#boxyDefeat').delay(500).animate({

	  			'margin-left': 280

			},300, 'easeOutQuad');

	 		$('#enemy').delay(500).animate({

	  			'width': 170,
	  			'margin-left': 230 

	 		},300, 'easeOutQuad');

	 		$('#boxyDefeat').delay(1000).animate({

	  			'width': 65,
	  			'height': 38,
	  			'margin-top': 12,
	  			'margin-left': 0,
	  			

			},500, 'easeInOutBounce');

	 		$('#enemy').delay(1000).animate({

	  			'width': 400,
	  			'margin-left': 0 

	 		},500, 'easeInOutBounce');

	 		$('#boxyDefeat, #enemy').delay(1000).animate({

	  			
	  			
	  			'opacity': 0,
	  			

			},1000, 'swing');

			$('#boxyDefeat').delay(500).animate({

	  			
	  			'width': 50,
	  			'height': 50,
	  			'margin-top': 0,
	  			
	  			

			},1000, 'swing');
			
			$('#boxyDefeat').delay(500).animate({

	  			
	  			
	  			'opacity': 1.0,
	  			

			},1000, 'swing');

	})  
	


	//Boredom
	$('#boredom').click(function() {

		var i;
		
		for (i = 0; i < 3; i++) {
			$('#boxyBoredom').animate({

	  			'margin-left': '250px'

			},4000, 'swing');

	 		$('#boxyBoredom').animate({

	  			'margin-left': '0px' 

	 		},4000, 'swing');
		
	 	}

	})


	//Consideration
	$('#consideration').click(function() {

		
			$('.conLine10').animate({

	  			'opacity': 1.0

			}, 1000, 'easeInQuart');
			$('.conLine9').delay(1000).animate({

	  			'opacity': 1.0

			}, 1000, 'easeInQuart');
			$('.conLine8').delay(2000).animate({

	  			'opacity': 1.0

			}, 1000, 'easeInQuart');
			$('.conLine7').delay(3000).animate({

	  			'opacity': 1.0

			}, 1000, 'easeInQuart');
			$('.conLine6').delay(4000).animate({

	  			'opacity': 1.0

			}, 1000, 'easeInQuart');
			$('.conLine5').delay(5000).animate({

	  			'opacity': 1.0

			}, 1000, 'easeInQuart');
			$('.conLine4').delay(6000).animate({

	  			'opacity': 1.0

			}, 1000, 'easeInQuart');
			$('.conLine3').delay(7000).animate({

	  			'opacity': 1.0

			}, 1000, 'easeInQuart');
			$('.conLine2').delay(8000).animate({

	  			'opacity': 1.0

			}, 1000, 'easeInQuart');
			$('.conLine1').delay(9000).animate({

	  			'opacity': 1.0

			}, 1000, 'easeInQuart');
			$('.card-main-consideration').delay(10000).animate({

	  			'background-color': '#77ECDA'

			}, 10, 'linear');



	 		
		
	 	

	})





	document.querySelector('#freetwo').onclick = grow.restart;

	//Sneaking
	$('#sneaking').click(function() {

		var i;
		
		for (i = 0; i < 6; i++) {
			$('#boxySneaking').delay(500).animate({

	  			'margin-left': 30 + i * 30

			}, 1700, 'easeInBack');

	 		
		
	 	}

	 	$('#boxySneaking').delay(1000).animate({

	  			'opacity': 0,
	  			

			},1000, 'swing');

	 	$('#boxySneaking').delay(100).animate({

	  			'margin-left': 0,
	  			

			},1000, 'swing');
	 	$('#boxySneaking').delay(1000).animate({

	  			'opacity': 1.0,
	  			

			},1000, 'swing');

	})


})



//anime.js
//Rushing

var boxyRush = anime({
  	targets: '#boxyRushing',
  	translateX:  [
	  	{value: 800, duration: 400},
	  	// {value: 0, duration: 400}
  	],
  	easing: [.91,-0.54,.89,.96],
  	delay: 200,
  	autoplay: false
});

document.querySelector('#rushing').onclick = boxyRush.restart;


//Flirting
var boxyFlirting = anime.timeline({
  
  loop: false
});

boxyFlirting
  .add({
    targets: '#boxyFlirting',
    translateX: [ { value: 100 }, { value: 160 }, { value: 250 }, { value: 130 }, { value: 130 } ],
    translateY: [ { value: 0 }, { value: -60 }, { value: -60 } , { value: -60 }, { value: 0 }],
    duration: 6000,
    offset: 0,
    autoplay: false
  })
  .add({
    targets: '#boxyGirl',
    rotate: [{ value: 0 }, { value: 60 }, { value: 60 }, { value: 60 }, , { value: 0 }],
    duration: 6000,
    offset: 450,
    autoplay: false
  });
document.querySelector('#flirting').onclick = boxyFlirting.restart;






//Freestyle one - love is a touch and yet not a touch
$(document).ready(function(){

	
	$('#freeone').click(function(){


	

		$('#boxyFreeOne').animate({

			'width': 80,
			'height': 31.25,
			'margin-left': 30,
			'margin-top': 18.75

		}, 1900, 'easeInOutSine');

		$('#boxyFreeOne').animate({

			'width': 50,
			'height': 50,
			'margin-left': 0,
			'margin-top': 0

		}, 650, 'easeOutSine')

	})




})


//Freestyle two - grow up
	
var grow = anime.timeline({

	loop: false,
	autoplay: false

})

grow
.add({
	targets: '#boxyFreeTwo',
  			
			translateX: 250,
			translateY: -25,
			scale: 2,
			rotate: '1turn',
			duration: 12000,
			delay: 500
})
		
.add({
	targets: '.card-main-freetwo',
  			
			backgroundColor: {value: '#F4AC12'},
			duration: 12000,
			easing: 'easeOutSine',
			offset: 0
			
})


	document.querySelector('#freetwo').onclick = grow.restart;








// Shocked
var boxySur = anime ({
 	targets: '#boxySurprise',
  	
  	left: '250px',
  	
  	duration: 1000,
  	elasticity: 2000,
  	autoplay: false


});




document.querySelector('#surprise').onclick = boxySur.restart;



  
  



	





