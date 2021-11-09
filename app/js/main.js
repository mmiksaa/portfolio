$(function () {

  // window.onload = function () {

  //   setTimeout(function () {

  //     var preloader = document.getElementById('preload');
  //     if (!preloader.classList.contains('hidden')) {
  //       preloader.classList.add('hidden');
  //     }
  //   }, 600);
  // };

  document.body.onload = function () {
    setTimeout(function () {
      $('.preloader').addClass('hidden'); //скрываем прелоадер
      $('body').removeClass('before-preloader'); //описание ниже
    }, 700);
  };

  $('.burger').on('click', function () {
    $('.burger').toggleClass('burger--active');
    $('.header__nav').toggleClass('header__nav--active');
    $('body').toggleClass('body--active');
  });

  $('.header__link').on('click', function () {
    $('.burger').toggleClass('burger--active');
    $('.header__nav').toggleClass('header__nav--active');
    $('body').toggleClass('body--active');
  });

  $('.circle').circleProgress({
    emptyFill: "rgba(0, 0, 0, 0)",
  });


  new WOW().init();

  $(".works__item").slice(0, 4).show();
  $(".works__button").on("click", function (e) {
    e.preventDefault();
    $(".works__item:hidden").slice(0, 4).slideDown();
    if ($(".works__item:hidden").length == 0) {
      $(".works__button").text("No Content").addClass("works__button--active");
    }
  });

  $('.form__work-btn, .select-file').click(function () {
    $('#file').show();
    $('#file').change(function () {
      var filename = $('#file').val();
      $('.select-file').html(filename);
      $('.form__work-btn').addClass('form__work-btn--active');
    });
  });

  magicMouse({
    "outerWidth": 50,
    "outerHeight": 50,
    "hoverEffect": "pointer-blur",
    "cursorOuter": "circle-basic",
  });

  $(".header__top, .about-me__wrapp").on("click", "a", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 700);
  });

  

});