$(document).ready(function () {


  //*** WORK SECTION STICKY
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


  //***

  $('#omni').click(function () {

    //scroll to section
    $('body').animate({
        scrollTop: $('#omni').offset().top
      }, 400);

    //hide other sections
    setTimeout(function() {
      $("#rdi").addClass('hide-section');
      $("#macbox").addClass('hide-section');
      $("#nonprof").addClass('hide-section');
    }, 400)

    //make page expand;
    $("#work-header").addClass('minimized');
    $("#work-content").addClass('expanded');

    //raise up header image
    $(".work-header-image.omni").addClass('small-header');

  })





})


