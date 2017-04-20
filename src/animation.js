$(document).ready(function () {


  //*** WORK SECTION STICKY
  const $window = $(window),
        $header = $('#work-header'),
        $main = $('#work-main');

  const fixedHeaderTop = $header.offset().top + $header.height()



  $window.on('scroll', function () {
    if ($window.width() >= 992) {

      // let ttop = $('.work-content.expanded-column').height() * 0.355;

      let mainTop = $main.offset().top;
      let windowTop = $window.scrollTop();

      let mainBottom = $main.height() + mainTop;
      let windowBottom = $window.height() + windowTop;

      if (windowBottom > mainBottom) {
        $header.removeClass('fixed-header');
        $header.css('top', fixedHeaderTop)
      }
      else if (windowTop > mainTop) {
        $header.addClass('fixed-header');
        $header.css('top', 0)
      }
      else {
        $header.removeClass('fixed-header');
      }
    }
  });


  //*** TRANSITION ANIMATION ***//
  const sections = ['omni', 'rdi', 'macbox', 'nonprof'];

  sections.forEach((section, i) => {
    $(`#${section}`).click(function () {

      //make header unclickable
      $(`#${section}`).removeClass('closed')


      $('body').animate(
        //scroll to section
        {scrollTop: $(`#${section}`).offset().top},
        400,
        function() {

          //hide other sections
          sections.forEach((otherSection, j) => {
            if (j !== i) {
              $(`#${otherSection}`).addClass('hide-section');
            }
          })

          //make page expand;
          $("#work-header").addClass('minimized');
          $(".work-content").addClass('expanded-column');

          //give height to hidden content
          $(`#${section} > .work-item-content`).addClass('expanded-content');

          //raise up header image
          $(`#${section} > .work-item-header`).addClass('small-header');
        });
    })
  })






})


