$(function() {

  var $navOpen = $('.js-nav-open');
  var $navClose = $('.js-nav-close');
  var $header = $('.header');
  var $offsetLeft = $('.offset-left');

  $navOpen.on('click', function(e) {
    e.preventDefault();
    $(this).fadeOut(100);
    $navClose.fadeIn(200);
    $header.animate({
      left: 0
    }, 200)

  })

  $navClose.on('click', function(e) {
    e.preventDefault();
    $navOpen.fadeIn();
    $header.animate({
      left: -160
    }, 200)
    $offsetLeft.animate({
      paddingLeft: 20
    }, 200)
  })

  var $windowWidth = $(window).width();

  $(window).resize(function() {
    console.log($header.css( 'left' ));
    console.log($windowWidth);
    if ( $windowWidth > 800 && $header.css( 'left' ) === '-160px' ) {
      $header.removeAttr('style');
      $offsetLeft.removeAttr('style');
      $navOpen.removeAttr('style');
      $navClose.removeAttr('style');
    }
  })

});



$(function() {


var $container = $('.js-portfolio-items').imagesLoaded( function() {
  $container.isotope({
    // options
    itemSelector: '.all'
  });

});



$('.js-portfolio-option').click(function() {

  var selector = $(this).attr('data-filter');

  $('.js-portfolio-option').removeClass('active-filter');
  $(this).addClass('active-filter');

  $container.isotope({  
    filter: selector
  });

  return false;
});


});





$(function() {

  var $scrolltop = $('.scrolltop');


  $(window).scroll(function() {

    if ( $(this).scrollTop() > $('.js-portfolio-options').offset().top ) {
      $scrolltop.fadeIn();
    } else {
      $scrolltop.fadeOut();
    }

  })




  $('.scrolltop').on('click', function(e) {
    console.log(1);
    e.preventDefault();
    console.log($('body').scrollTop());
    $('html, body').animate({
      scrollTop: "0"
    }, 400);
  });

});

