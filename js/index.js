//Countdown timer
// Set the date we're counting down to
var countDownDate = new Date("Jan 20, 2023 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("counter").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "RELEASED!";
  }
}, 1000);

//jQuery
$(document).ready(function(){
  console.log("initializing..");

  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('#main-header').outerHeight();

  console.log(`navbar height: ${$('#main-header').outerHeight()}`)

  $(window).scroll(function(event){
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();
      
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
      return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
      // Scroll Down
      $('#main-header').removeClass('nav-down').addClass('nav-up');
      lastScrollTop = st;
    } else {
      // if(st + $(window).height() <= $(document).height()) {
      //     $('#main_header').removeClass('nav-up').addClass('nav-down');
      //     console.log("adding nav down");
      // }
      if(st < lastScrollTop) {
        $('#main-header').removeClass('nav-up').addClass('nav-down');
      }
    }
    
    lastScrollTop = st;
  }
  $('#main-social .link').hover(function(){
    $('#main-social .text').toggleClass('active');
  })

})