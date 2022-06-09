$(document).ready(function () {
       
  $(".icon-search-bar").click(function () {
    $(this).toggleClass("bg-green");
    $(".icon-search-bar").toggleClass("colo-white");
    $(".input").focus().toggleClass("active-width");
    $(this).find('.input').val('');
  
  });



  $('.hamburger').on('click', function () {
    $('.navigation').toggleClass('menu-open');
    $('.hamburger').toggleClass('menu-close');
    $('html').toggleClass('menu-page')
  });



  // lorem-slick-slider

  $('.slider').slick({
    slidesToScroll: 1,
    // focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    // dots: false,
    // arrow: true,
    slidesToShow: 4,
    infinite: true,
    nextArrow: '<span class="next_arrow"><span class="icon-arrow-right"></span></span>',
    prevArrow: '<span class="priv_arrow"><span class="icon-arrow-left"></span></span>',
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          adaptiveHeight: true,

        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          adaptiveHeight: true,

        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

  });

  // testimonial-slider


  $('.testimonial-slider').slick({
    slidesToScroll: 1,
    // focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    dots: true,
    // arrow: true,
    slidesToShow: 3,
    infinite: true,

    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          adaptiveHeight: true,

        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          adaptiveHeight: true,

        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

  });

  // progress-circle
  $(function () {

    $('.circlechart').circlechart();

  });



});