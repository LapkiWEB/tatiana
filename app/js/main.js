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


$('.diplomas__inner').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: document.querySelector('.slick-prev'),
    nextArrow: document.querySelector('.slick-next'),
    dots: true,
    dotsClass: 'slick-dots',
    focusOnSelect: true,
    speed: 500,
    responsive: [{
        breakpoint: 100,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 100,
        settings: {
         arrows: false,
        slidesToShow: 1,
        }
      }
    ]
  });

  $('.reviews__slider-inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false, 
    dotsClass: 'slick-dots',
    focusOnSelect: true,
    speed: 500,
    responsive: [{
        breakpoint: 1300,
        settings: {
          // slidesToShow: 1,
        }
      },
      {
        breakpoint: 1000,
        settings: {
        //  arrow: false,
        // slidesToShow: 1,
        }
      }
    ]
  });

   $('.questions__item').on('click', (function () {
     $(this).find('.questions__item-title--btn').addClass('active');
     $(this).siblings().find('.questions__item-title--btn').removeClass('active');

    $(this).find('.questions__item-text').show(500);
    $(this).siblings().find('.questions__item-text').hide(500);

  }));



  });

  



