$(document).ready(function() {

  // 반응형
  var mWidth = $(window).width();
  if (mWidth <= 768) {
    $('.main_menu').addClass('mobile');
    $('.ticon').addClass('mobile');
  } else {
    $('.main_menu').removeClass('mobile');
    $('.ticon').removeClass('mobile');
  }


  // colorbox
  $(".modal").colorbox({
    rel: "modal"
  });
  $(".youtube").colorbox({
    iframe: true,
    innerWidth: 700,
    innerHeight: 393.75
  })

});

// 반응형 제어
$(window).resize(function() {

  // gnb
  var mWidth = $(window).width();
  if (mWidth <= 768) {
    $('.main_menu').addClass('mobile');
    $('.ticon').addClass('mobile');
  } else {
    $('.main_menu').removeClass('mobile');
    $('.ticon').removeClass('mobile');
  }


});
