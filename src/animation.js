$(document).ready(function () {

  const $window = $(window),
        $header = $('#work-header'),
        $main = $('#work-main');


  $window.on('scroll', function () {
    if ($window.width() >= 992) {
      let mainTop = $main.offset().top;
      let windowTop = $window.scrollTop();

      let mainBottom = $main.height() + mainTop;
      let windowBottom = $window.height() + windowTop;

      if (windowBottom > mainBottom) {
        $header.removeClass('fixed-header');
        $header.addClass('top')
      }
      else if (windowTop > mainTop) {
        $header.addClass('fixed-header');
        $header.removeClass('top');
      }
      else {
        $header.removeClass('fixed-header');
      }
    }

  })




})


