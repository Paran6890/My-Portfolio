// ============stiky bar===============
$(window).scroll(function () {
  var scrollamount = $(window).scrollTop()

  if (scrollamount > 200) {
    $(".menu").addClass("fixed")
  } else {
    $(".menu").removeClass("fixed")
  }

  if (scrollamount > 200) {
    $(".btop").fadeIn();
  } else {
    $(".btop").fadeOut();
  }
})

// water ripple

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
    perturbance: 0.01,
    
  });
  $('.about').ripples({
    dropRadius: 20,
    perturbance: 0.01,
    
  });
 
  $('.ros').ripples({
    dropRadius: 20,
    perturbance: 0.01,
    
  });
  $('.w-ripple').ripples({
    dropRadius: 20,
    perturbance: 0.01,
    
  });
  $('#team-part').ripples({
    dropRadius: 20,
    perturbance: 0.01,
    
  });
  $('#my_service_part').ripples({
    dropRadius: 20,
    perturbance: 0.01,
    
  });
  $('#foter-part').ripples({
    dropRadius: 20,
    perturbance: 0.01,
    
  });



  $(document).ready(function(){

	$('#bar1').barfiller({ duration: 1000 });
	$('#bar2').barfiller({ duration: 2000 });
	$('#bar3').barfiller({ duration: 3000 });
	$('#bar4').barfiller({ duration: 4000 });
    $('#bar5').barfiller({ duration: 5000 });
    $('#bar6').barfiller({ duration: 6000 });
});




// projects_fillter

(function ($){


  var $grid = $('.grid').isotope({
    // options
  });
  
  $('.project-filtter').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  $('.project-filtter').on( 'click', 'li', function() {
    $(this).addClass('active').siblings().removeClass("active");
  });

  
})(jQuery);





// counter-part-js

(function ($) {
  $.fn.countTo = function (options) {
      options = options || {};
      
      return $(this).each(function () {
          // set options for current element
          var settings = $.extend({}, $.fn.countTo.defaults, {
              from:            $(this).data('from'),
              to:              $(this).data('to'),
              speed:           $(this).data('speed'),
              refreshInterval: $(this).data('refresh-interval'),
              decimals:        $(this).data('decimals')
          }, options);
          
          // how many times to update the value, and how much to increment the value on each update
          var loops = Math.ceil(settings.speed / settings.refreshInterval),
              increment = (settings.to - settings.from) / loops;
          
          // references & variables that will change with each update
          var self = this,
              $self = $(this),
              loopCount = 0,
              value = settings.from,
              data = $self.data('countTo') || {};
          
          $self.data('countTo', data);
          
          // if an existing interval can be found, clear it first
          if (data.interval) {
              clearInterval(data.interval);
          }
          data.interval = setInterval(updateTimer, settings.refreshInterval);
          
          // initialize the element with the starting value
          render(value);
          
          function updateTimer() {
              value += increment;
              loopCount++;
              
              render(value);
              
              if (typeof(settings.onUpdate) == 'function') {
                  settings.onUpdate.call(self, value);
              }
              
              if (loopCount >= loops) {
                  // remove the interval
                  $self.removeData('countTo');
                  clearInterval(data.interval);
                  value = settings.to;
                  
                  if (typeof(settings.onComplete) == 'function') {
                      settings.onComplete.call(self, value);
                  }
              }
          }
          
          function render(value) {
              var formattedValue = settings.formatter.call(self, value, settings);
              $self.html(formattedValue);
          }
      });
  };
  
  $.fn.countTo.defaults = {
      from: 0,               // the number the element should start at
      to: 0,                 // the number the element should end at
      speed: 1000,           // how long it should take to count between the target numbers
      refreshInterval: 100,  // how often the element should be updated
      decimals: 0,           // the number of decimal places to show
      formatter: formatter,  // handler for formatting the value before rendering
      onUpdate: null,        // callback method for every time the element is updated
      onComplete: null       // callback method for when the element finishes updating
  };
  
  function formatter(value, settings) {
      return value.toFixed(settings.decimals);
  }
}(jQuery));

jQuery(function ($) {
// custom formatting example
$('.count-number').data('countToOptions', {
  formatter: function (value, options) {
    return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
  }
});

// start all the timers
$('.timer').each(count);  

function count(options) {
  var $this = $(this);
  options = $.extend({}, options || {}, $this.data('countToOptions') || {});
  $this.countTo(options);
}
});












