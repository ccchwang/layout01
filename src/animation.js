$(document).ready(function () {


  //*** MAKE WORK SECTION STICKY
  const $window = $(window),
        $body = $('body'),
        $header = $('#work-header'),
        $main = $('#work-main'),
        $content = $('.work-content'),
        $itemHeader = $('.work-item-header'),
        $itemContent = $('.work-item-content'),
        $xBtn = $('.x-btn'),
        $xBtnTop = $('.x-btn > .top'),
        $xBtnRight = $('.x-btn > .right'),
        $xBtnBottom = $('.x-btn > .bottom'),
        $xBtnLeft = $('.x-btn > .left'),
        $xBtnP = $('.x-btn > p');


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
      $header.css('top', headerTop);

      if ($window.width() >= 992) {
        $xBtn.removeClass('fixed-btn');
        $xBtn.css('top', headerTop + 20)
      }
    }
    else if (windowTop > mainTop) {
      $header.addClass('fixed-header');
      $xBtn.addClass('fixed-btn');
      $header.css('top', 0);
      $xBtn.css('top', 20)
    }
    else {
      $header.removeClass('fixed-header');
      $header.css('top', 0);

      if ($window.width() >= 992) {
        $xBtn.removeClass('fixed-btn');
        $xBtn.css('top', 20)
      }
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
          $('.work-content > div.closed').addClass('hide-section');
          $window.scrollTop($('.opened').offset().top)

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

          //show x button
          $xBtn.css('visibility', 'visible');
          $xBtnTop.delay(800).animate({right: 0}, 160, 'swing');
          $xBtnRight.delay(960).animate({bottom: 0}, 160, 'swing');
          $xBtnBottom.delay(1120).animate({left: 0}, 160, 'swing');
          $xBtnLeft.delay(1280).animate({top: 0}, 160, 'swing');
          $xBtnP.delay(1440).animate({left: '4.5px'}, 180, 'swing')

          //raise up header image
          setTimeout(function(){
            $(`#${section} > .work-item-header`).addClass('small-header');
            }, 900)
        });
    })
  })





  //*** CLOSE BUTTON ANIMATION ***//
  $xBtn.click(function(e){
    e.stopPropagation();
    let $openedElem = $('.opened');


    $body.animate({scrollTop: $content.offset().top}, 400, function(){

      //drop down header
      $itemHeader.removeClass('small-header')

      //make header img clickable
      $openedElem.addClass('closed');
      $openedElem.removeClass('opened')

      //hide x button
      $xBtnP.animate({left: '-46px'}, 200, 'swing');
      $xBtnLeft.delay(300).animate({top: '100%'}, 200, 'swing', function(){
        $xBtnBottom.animate({left: '100%'}, 200, 'swing');
      });
      $xBtnRight.delay(700).animate({bottom: '100%'}, 200, 'swing', function() {
        $xBtnTop.animate({right: '100%'}, 200, 'swing', function(){
          $xBtn.css('visibility', 'hidden');
        })
      });


      setTimeout(function(){
        //remove height from hidden content
        $itemContent.removeClass('expanded-content');

        //close page
        $header.removeClass('minimized');
        $content.removeClass('expanded-column');

        //show hidden sections again
        $('.work-content > div').removeClass('hide-section')
        $window.scrollTop($openedElem.offset().top)

        //remove border from title block
        $header.removeClass('add-border');


      }, 800)
    })

  })




})


