/*------------------------------------*\
    Main JS 
\*------------------------------------*/

(function($) {

/**
 *  Generate random Value from array helper function
 */

function randomValueFromArray(arrayObj) {
  return  Math.floor( Math.random() * arrayObj.length );
}


/**
 *  Use storage API to change greeting message on intro page (Home)
 *  ~ feature detection with Modernizr lib ~
 */

// check for storage api support 
if ( Modernizr.localstorage || Modernizr.sessionstorage || window.localstorage || window.sessionstorage ) {
    // alert("storage api available! Yay!");

    // store message item
    var $greeting = $('[role="banner"] .msg--greeting');

    // if user is returning change messge 
    if( localStorage.getItem('returnVisit')) {
        
        // change message text
        $greeting.text("Welcome back, I'ts nice to see you!");

    }

    // set storage item value
    localStorage.setItem('returnVisit', 'true');
    
}


/*------------------------------------*\
    Floating Box Nav JS
\*------------------------------------*/

  var MenuBtn = $('.menu-button');
  var floatingBox = $('[role="navigation"].floating-box');

  // progressivly add "hidden" attr for accessiblity
  if( $('html').hasClass("js") ) {
      floatingBox.attr('hidden', 'hidden');
  }

  MenuBtn.on('click', function(e) {
    // stop default link behavior for development testing.
    // integrate more accessible way of link hiijacking.
    e.preventDefault();

      if(!$(this).hasClass("is--active")) {
      // Add active/open states 

          $(this).addClass("is--active");
          $(this).attr('aria-expanded', 'true');
          $('body').addClass("menu--open");
          floatingBox.addClass("is--open");
          floatingBox.removeAttr('hidden');

      } 
      else {
      // remove active/open states

          $(this).removeClass("is--active");
          $(this).attr('aria-expanded', 'false');
          $('body').removeClass("menu--open");
          floatingBox.removeClass("is--open");
          floatingBox.attr('hidden', 'hidden');

      }

  });

/* if click outside menu panel (overlay object) close menu */

  $('.page-overlay').on('click', function(e) {

    if($('body').hasClass("menu--open")) {

      MenuBtn.removeClass("is--active");
      MenuBtn.attr('aria-expanded', 'false');
      floatingBox.removeClass("is--open");
      floatingBox.attr('hidden', 'hidden');
      $('body').removeClass("menu--open");

    }

  });


/*------------------------------------*\
    Scroll Buttons JS
\*------------------------------------*/

// accessible scroll function
// src: https://css-tricks.com/smooth-scrolling-accessibility/


var scrollUp = $('#scrollUp');
var scrollDown = $('#scrollDown');

scrollUp.on('click', function(e) {
  // console.log("Scroll Up clicked!");
  e.preventDefault();

  var target = $('[role="document"]');

  $('html,body').animate({
      scrollTop: 0
    }, 1000);

    // target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
    target.focus(); // Setting focus
  
});

scrollDown.on('click', function(e) {
  // console.log("Scroll Down clicked!");
  e.preventDefault();
    
  var target = $(this.getAttribute('href'));
  var focusTarget = target;

  // target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

  if (target.length) {
    $('html,body').animate({
      scrollTop: target.offset().top
    }, 1000);

    // focusTarget.attr('tabindex','-1'); // Adding tabindex for elements not focusable
    focusTarget.focus(); // Setting focus
  }
  
});




// END 
})(jQuery);
