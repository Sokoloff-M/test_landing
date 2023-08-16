$(document).ready(function(){
  $('.slider').slick({
    arrows:true,
    dots:true,
    adaptiveHeight:true,
    slidesToShow:3,
    speed:1000,
    easing:'linear',
    infinite:true,
    autoplay:false,
    autoplaySpeed:1500,
    pauseOnHover:true,
    centerMode:true,
    asNavFor:".sliderbig",
  });
  $('.sliderbig').slick({
    arrows:false,
    fade:true,
    asNavFor:".slider",


  });
});