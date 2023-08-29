new WOW().init();





$(function () {

  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const blockID = anchor.getAttribute('href')
      document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    })
  }


  $('.menu__btn').on('click', (function () {
    if (!$('.header__menu').hasClass('active')) {
      $('.header__menu').addClass('active');
      $('.menu__btn').addClass('active');

    } else {
      $('.header__menu').removeClass('active');
      $('.menu__btn').removeClass('active');

    }
  }));

  $('.menu__list-link').on('click', (function () {
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
      breakpoint: 800,
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


const modalTrigger = document.querySelectorAll('[data-modal]'),
  modal = document.querySelector('.modal'),
  modalCloseBtn = document.querySelector('[data-close]');

modalTrigger.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    document.getElementsByTagName('html')[0].style.overflow = "hidden";
  });
});

function clossModel() {
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
  document.getElementsByTagName('html')[0].style.overflow = "auto";
}

modalCloseBtn.addEventListener('click', clossModel);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    clossModel();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.code === "Escape" && modal.classList.contains('show')) {
    clossModel();
  }
});



