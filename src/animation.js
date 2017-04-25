window.onload = function() {
  window.loaded = true;
}

$(document).ready(function () {
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
        $xBtnP = $('.x-btn > p'),
        $svgIntro = $('.intro'),
        $svgText = $('.intro > text'),
        $headerBorder = $('#header-border'),
        $headerBorderTop = $('#header-border-animation > .top'),
        $headerBorderLeft = $('#header-border-animation > .left'),
        $headerBorderBottom = $('#header-border-animation > .bottom');


  $(function() {
    TweenLite.to($headerBorderTop, 0.5, {left:0, onComplete: animateLeft});

    function animateLeft() {
      TweenLite.to($headerBorderLeft, 0.5, {bottom:0, onComplete: animateBottom});
    }

    function animateBottom() {
      TweenLite.to($headerBorderBottom, 1, {right:30, onComplete: checkLoad});
    }

    function checkLoad() {
      if (window.loaded) {
        TweenLite.to($headerBorderBottom, 1, {right:0, onComplete: startSVGAnimation});
      }
      else {
        window.onload = function() {
          TweenLite.to($headerBorderBottom, 1, {right:0, onComplete: startSVGAnimation});
        }
      }
    }

    function startSVGAnimation() {
      $svgIntro.addClass('go');
      $body.addClass('loaded');

      fillSVGText()
    }

    function fillSVGText() {
      let delay = $window.width() < 992 ? 4500 : 5000;

      //after 5s, set border color to main highlight and pause animation
      setTimeout(function(){
        $headerBorder.css('border-color', '#f7fb8e');
        $svgText.addClass('svg-fill');
      }, 3500)
    }
  })





  //*** MAKE WORK SECTION STICKY
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

      //scroll to section
      TweenLite.to($body, 0.4, {scrollTop:$(`#${section}`).offset().top, onComplete: function () {
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
        TweenLite.to($xBtnTop, 0.16, {right:0, delay: 0.8, onComplete: animateRight})

        function animateRight() {
          TweenLite.to($xBtnRight, 0.16, {bottom:0, onComplete: animateBottom})
        }
        function animateBottom() {
          TweenLite.to($xBtnBottom, 0.16, {left:0, onComplete: animateLeft})
        }
        function animateLeft() {
          TweenLite.to($xBtnLeft, 0.16, {top:0, onComplete: animateP})
        }
        function animateP() {
          TweenLite.to($xBtnP, 0.18, {left:'4.5px'})
        }

        //raise up header image
        setTimeout(function(){
          $(`#${section} > .work-item-header`).addClass('small-header');
          }, 900)
      }});


    })
  })





  //*** CLOSE BUTTON ANIMATION ***//
  $xBtn.click(function(e){
    e.stopPropagation();
    let $openedElem = $('.opened');

    TweenLite.to($body, 0.4, {scrollTop: $content.offset().top, onComplete: function () {

      //drop down header
      $itemHeader.removeClass('small-header')

      //make header img clickable
      $openedElem.addClass('closed');
      $openedElem.removeClass('opened')

      //hide x button
      TweenLite.to($xBtnP, 0.2, {left:'-46px', onComplete: animateLeft})

      function animateLeft() {
        TweenLite.to($xBtnLeft, 0.2, {top:'100%', delay: 0.1, onComplete: animateBottom})
      }
      function animateBottom() {
        TweenLite.to($xBtnBottom, 0.2, {left:'100%', onComplete: animateRight})
      }
      function animateRight() {
        TweenLite.to($xBtnRight, 0.2, {bottom:'100%', onComplete: animateTop})
      }
      function animateTop() {
        TweenLite.to($xBtnTop, 0.2, {right:'100%', onComplete: function(){
         $xBtn.css('visibility', 'hidden');
        }})
      }


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
    }})

  })




})


