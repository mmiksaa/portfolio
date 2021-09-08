$(function () {

  $('.burger').on('click', function () {
    $('.burger').toggleClass('burger--active');
    $('.header__nav').toggleClass('header__nav--active');
    $('body').toggleClass('body--active')
  });

  $('.works__button').on('click', function() {
    $('.works__item:last-child').slideToggle();
  });

  $('#circle').circleProgress({
    value: 0.50,
    emptyFill: "rgba(0, 0, 0, 0)",
    
  });

});