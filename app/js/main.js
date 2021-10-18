$(function () {

  $('.burger').on('click', function () {
    $('.burger').toggleClass('burger--active');
    $('.header__nav').toggleClass('header__nav--active');
    $('body').toggleClass('body--active')
  });

  $('.header__link').on('click', function () {
    $('.burger').toggleClass('burger--active');
    $('.header__nav').toggleClass('header__nav--active');
    $('body').toggleClass('body--active')
  });

  $('.circle').circleProgress({
    emptyFill: "rgba(0, 0, 0, 0)",

  });

  new WOW().init();

  const ITEMS_COUNT_PER_CLICK = 4;

  const showButton = document.querySelector('.works__button');
  const items = document.querySelectorAll('.works__item');
  const itemsCount = items.length;
  let i = ITEMS_COUNT_PER_CLICK;

  for (; i < itemsCount; ++i) {
    items[i].style.display = 'none';
    items[i].style.opacity = '1';
  }

  i = ITEMS_COUNT_PER_CLICK;

  const callback = (event) => {
    if (i >= itemsCount) {
      $('.works__button').addClass('works__button--active');
      return;
    }

    items[i++].style.display = '';
    // items[i++].self.style.opacity = '1';
    if (i < itemsCount) {
      // items[i++].self.style.opacity = '1';
      items[i++].style.display = '';
    }
  };

  showButton.addEventListener('click', callback);


  ​
  $('.form__work-btn, #select_file').click(function () {
    $('#file').show();
    $('#file').change(function () {
      var filename = $('#file').val();
      $('#select_file').html(filename);
      $('.form__btn').addClass('form__btn--active')
    });
  });

  magicMouse({
    "outerWidth": 50,
    "outerHeight": 50,
    "hoverEffect": "pointer-blur", 
    "cursorOuter": "circle-basic",
  });

  $(window).on("load", function () {
    $(".preload").fadeOut("slow");
  });

  $(".header__nav, .about-me__wrapp").on("click", "a", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 700);
  });

  let mask = document.querySelector('.preload')

  window.addEventListener('load', () => {
    mask.classList.add('hide');
    setTimeout(() => {
      preload.remove();
    }, 600);
  });

});