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
        $header.addClass('top')
      }
      else if (windowTop > mainTop) {
        $header.addClass('fixed-header');
        $header.removeClass('top')
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
        function () {

          //hide other sections
          sections.forEach((otherSection, j) => {
            if (j !== i) {
              $(`#${otherSection}`).addClass('hide-section');
            }
          })

          //make page expand;
          setTimeout(function(){
            $("#work-header").addClass('minimized');
            $(".work-content").addClass('expanded-column');

            //give border to title block
            $("#work-header").addClass('add-border');


            //give height to hidden content
            $(`#${section} > .work-item-content`).addClass('expanded-content');

            //raise up header image
            $(`#${section} > .work-item-header`).addClass('small-header');
            }, 300)

        }
        );



    })
  })

  // $window.resize(function(){
  //   if ($window.width() <= 992) {
  //     $("#work-header").removeClass('minimized');
  //     $(".work-content").removeClass('expanded-column');
  //     $header.css('top', 0)
  //   }
  //   else {
  //     $("#work-header").addClass('minimized');
  //     $(".work-content").addClass('expanded-column');
  //     $header.css('top', '271.5px')
  //   }
  // })






})


