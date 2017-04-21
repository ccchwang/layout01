$(document).ready(function () {


  //*** MAKE WORK SECTION STICKY
  const $window = $(window),
        $body = $('body'),
        $header = $('#work-header'),
        $main = $('#work-main'),
        $content = $('.work-content'),
        $xBtn = $('.x-btn');


  $window.on('scroll resize', function () {

    //height of all work section content minus height of window
    let headerTop = $content.height() - $window.height();

    //#work-main: distance from top/bottom of window
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
      $header.css('top', 0)
    }
  });


  //*** TRANSITION ANIMATION ***//
  const sections = ['omni', 'rdi', 'macbox', 'nonprof'];

  sections.forEach((section, i) => {
    $(`#${section}`).click(function (e) {
      e.stopPropagation();

      if ($(`#${section}`).hasClass('opened')) {
        return;
      }

      //make header img unclickable
      $(`#${section}`).removeClass('closed')
      $(`#${section}`).addClass('opened')

      $body.animate(
        //scroll to section
        {scrollTop: $(`#${section}`).offset().top},
        400,
        function () {
          //hide other sections
          $('.work-content > div.closed').addClass('hide-section')

          //show x button
          $xBtn.css('visibility', 'visible')

          //give border to title block
          $header.addClass('add-border');

          //give height to hidden content
          $(`#${section} > .work-item-content`).addClass('expanded-content');


          ////delay while scrolling to section, then:

          //make page expand;
          setTimeout(function(){
            $header.addClass('minimized');
            $content.addClass('expanded-column');
          }, 300)

          //raise up header image
          setTimeout(function(){
            $(`#${section} > .work-item-header`).addClass('small-header');
            }, 800)
        });
    })
  })


  //*** X BUTTON ANIMATION ***//
  $('.x-btn').click(function(e){
    e.stopPropagation();

    $body.animate({scrollTop: $('.expanded-column').offset().top}, 400, function(){

      //drop down header
      $('.work-item-header').removeClass('small-header')

      //make header img clickable
      $('.opened').addClass('closed');
      $('.opened').removeClass('opened')

      setTimeout(function(){
        //remove height from hidden content
        $(`.work-item-content`).removeClass('expanded-content');

        //close page
        $header.removeClass('minimized');
        $content.removeClass('expanded-column');

        //remove border from title block
        $header.removeClass('add-border');

        //show other sections again
        $('.work-content > div').removeClass('hide-section')
      }, 800)

    })

  })




})


