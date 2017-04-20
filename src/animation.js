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

    //make header unclickable
    $('#omni').removeClass('closed')

    //scroll to section
    $('body').animate({
        scrollTop: $('#work-main').offset().top
      }, 400);

    //hide other sections
    setTimeout(function() {
      $("#rdi").addClass('hide-section');
      $("#macbox").addClass('hide-section');
      $("#nonprof").addClass('hide-section');
    }, 400)

    //make page expand;
    $("#work-header").addClass('minimized');
    $(".work-content").addClass('expanded');

    //raise up header image
    $(".work-item-header.omni").addClass('small-header');

    $(".work-item").addClass('tryt')
  })





  $('#rdi').click(function () {

    //make header unclickable
    $('#rdi').removeClass('closed')


    //scroll to section, then hide other sections
    $('body').animate(
      {scrollTop: $('#rdi').offset().top},
      400,
      function() {
        $("#omni").addClass('hide-section');
        $("#macbox").addClass('hide-section');
        $("#nonprof").addClass('hide-section');
      });

    //hide other sections
    // setTimeout(function() {
    //   $("#omni").addClass('hide-section');
    //   $("#macbox").addClass('hide-section');
    //   $("#nonprof").addClass('hide-section');
    // }, 400)

    //make page expand;
    $("#work-header").addClass('minimized');
    $(".work-content").addClass('expanded');

    //raise up header image
    $(".work-item-header.rdi").addClass('small-header');


  })


})


