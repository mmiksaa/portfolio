$(function () {

  $('.burger').on('click', function () {
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

  var element = $('.form__input');
  if (element.is(':checked')) {
    $('.form__svg').toggleClass('form__svg--active');
  }

});