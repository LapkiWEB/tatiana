$(function () {

  $('.menu__btn').on('click', (function () {
    if (!$('.header__menu').hasClass('active')) {
      $('.header__menu').addClass('active');
      $('.menu__btn').addClass('active');

    } else {
      $('.header__menu').removeClass('active');
      $('.menu__btn').removeClass('active');

    }
  }));


  // $('.menu__btn').on('click', (function () {
  //   if (!$('.header__menu').hasClass('active')) {
  //     $('.header__menu').addClass('active');
  //     $('.menu__btn').addClass('active');

  //   } else {
  //     $('.menu').removeClass('active');
  //     $('.menu__btn').removeClass('active');

  //   }
  // }));


  });



