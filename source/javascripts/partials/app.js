$(document).ready(function() {

  sliderAbout = $("#carousel-about").lightSlider({
    item: 3,
    pager: true,
    autoWidth: true,
    loop: true,
  });

  $(".block-about .left").on('click', function() {
    sliderAbout.goToPrevSlide();
  });


  $(".block-about .right").on('click', function() {
    sliderAbout.goToNextSlide();
  });

  sliderMenu = $("#carousel-menu").lightSlider({
    item: 1,
    pager: false,
    autoWidth: false,
    adaptiveHeight: true,
    loop: true,
  });

  $(".block-menu .left").on('click', function() {
    sliderMenu.goToPrevSlide();
  });

  $(".block-menu .right").on('click', function() {
    sliderMenu.goToNextSlide();
  });

});
