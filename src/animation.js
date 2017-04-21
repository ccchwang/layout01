$(document).ready(function () {


  //*** WORK SECTION STICKY
  const $window = $(window),
        $header = $('#work-header'),
        $main = $('#work-main');

  $window.on('scroll resize', function () {
    if ($window.width() >= 992) {

      //height of all work section content minus height of window
      let headerTop = $('.work-content').height() - $window.height();

      let mainTop = $main.offset().top;
      let windowTop = $window.scrollTop();

      let mainBottom = $main.height() + mainTop;
      let windowBottom = $window.height() + windowTop;

      if (windowBottom > mainBottom) {
        $header.removeClass('fixed-header');
        $header.css('top', headerTop)
      }

      else if (windowTop > mainTop) {
        $header.addClass('fixed-header');
        $header.css('top', 0)
      }
      else {
        $header.removeClass('fixed-header');
      }
    }
    else {
      $header.css('top', 0)
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

  //   if ($window.width() >= 992) {
  //     let mainBottom = $main.height() + $main.offset().top;
  //     let windowBottom = $window.height() + $window.scrollTop();

  //     if (!$header.hasClass('fixed-header') && windowBottom > mainBottom) {
  //       let headerTop = $('.work-content').height() - $window.height();
  //       $header.css('top', headerTop)
  //     }
  //   }
  //   else {
  //     $header.css('top', 0)
  //   }
  // })






})


