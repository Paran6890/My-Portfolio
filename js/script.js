


var typed = new Typed('.poran', {
    strings: ['Web Developer',
     'Web Designer',
     'Freelancher',
     'Php Developer',
     'Wordpress Developer'
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
  });


  $('#banner-part').ripples({
    dropRadius: 20,
    perturbance: 0.1,
    
  });
  $('.about').ripples({
    dropRadius: 20,
    perturbance: 0.1,
    
  });
 
  $('.w-ripple').ripples({
    dropRadius: 20,
    perturbance: 0.1,
    
  });


  $(document).ready(function(){

	$('#bar1').barfiller({ duration: 1000 });
	$('#bar2').barfiller({ duration: 2000 });
	$('#bar3').barfiller({ duration: 3000 });
	$('#bar4').barfiller({ duration: 4000 });
    $('#bar5').barfiller({ duration: 5000 });
    $('#bar6').barfiller({ duration: 6000 });
});
