$(function () {

  $('.burger').on('click', function () {
    $('.burger').toggleClass('burger--active');
    $('.header__nav').toggleClass('header__nav--active');
    $('body').toggleClass('body--active')
  });

  $('.works__button').on('click', function() {
    $('.works__item:last-child').slideToggle();
  });

  $('.circle').circleProgress({
    emptyFill: "rgba(0, 0, 0, 0)",
    
  });

  // var Scrollbar = window.Scrollbar;

  // const options = {
  //   'damping': 0.04  
  // }

  // Scrollbar.init(document.querySelector('body'), options);

  new WOW().init();

});