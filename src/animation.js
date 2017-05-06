$(document).ready(function () {

  window.onload = function() {
    window.loaded = true;

    if (window.innerWidth <= 432) {
      startSVGAnimation()
    }
  }

  const $window = $(window),
        $body = $('body'),
        $work = $('#work-main'),
        $about = $('#about-main'),
        $workHeader = $('#work-header'),
        $workContent = $('.work-content'),
        $aboutHeader = $('#about-header'),
        $aboutContent = $('.about-content'),
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
        $headerImage = $('.header-image'),
        $headerBorderTop = $('#header-border-animation > .top'),
        $headerBorderLeft = $('#header-border-animation > .left'),
        $headerBorderBottom = $('#header-border-animation > .bottom');

  if ($window.width() > 432) {
    $body.addClass('loaded');
    loadingAnimation();
  }

  function loadingAnimation() {
    TweenLite.to($headerBorderTop, 0.25, {left:'50%', ease: Linear.easeNone, onComplete: animateRest})
  }

  //FUNCTIONS FOR LOADING ANIMATION
  function animateRest() {
      TweenLite.to($headerBorderTop, 0.25, {left:0, ease: Linear.easeNone, onComplete: animateLeft});
    }

    function animateLeft() {
      TweenLite.to($headerBorderLeft, 0.5, {bottom:0, onComplete: animateBottom});
    }

    function animateBottom() {
      TweenLite.to($headerBorderBottom, 0.25, {right:'60%', ease: Linear.easeNone, onComplete: checkLoad});
    }

    function checkLoad() {
      if (window.loaded) {
        TweenLite.to($headerBorderBottom, 0.25, {right:0, ease: Linear.easeNone, onComplete: startSVGAnimation});
      }
      else {
        window.onload = function() {
          TweenLite.to($headerBorderBottom, 0.25, {right:0, ease: Linear.easeNone, onComplete: startSVGAnimation});
        }
      }
    }

    function startSVGAnimation() {
      $svgIntro.addClass('go');
      $body.addClass('loaded');

      setTimeout(function(){
        document.getElementById("vid").play();
        fillSVGText()
      }, 3000)
    }

    function fillSVGText() {
      TweenLite.to($svgText, 2.5, {fill: '#333', onComplete: function(){
        $svgText.css('animation-play-state', 'paused')}
      })
    }



  //*** PARALLAX SCROLLING FOR HEADER IMAGE
  $window.on('scroll', function () {
    if (window.openedSection) {
      let $smallHeader = $('.scroll-header');
      let smallHeaderTop = $smallHeader.offset().top;
      let windowTop = $window.scrollTop();
      let calc = 0;

      if (windowTop > smallHeaderTop) {
        calc = (windowTop - smallHeaderTop) / 2
      }

      $smallHeader.css({'background-position': `center ${calc}px`});
    }
  });


  //*** MAKE WORK & ABOUT SECTION STICKY
  $window.on('scroll resize', function () {

    //#work-main: distance from top/bottom of window
    let workTop = $work.offset().top;
    let workBottom = $work.height() + workTop;
    //height of all work section content minus height of window
    let workHeaderTop = $workContent.height() - $window.height();

    //#about-main
    let aboutTop = $about.offset().top;
    let aboutBottom = $about.height() + aboutTop;
    let aboutHeaderTop = $aboutContent.height() - $window.height();

    //window
    let windowTop = $window.scrollTop();
    let windowBottom = $window.height() + windowTop;

    //logic for work
    if (windowBottom > workBottom) {
      $workHeader.removeClass('fixed-header');
      $workHeader.css('top', workHeaderTop);

      if ($window.width() >= 992) {
        $xBtn.removeClass('fixed-btn');
        $xBtn.css('top', workHeaderTop + 20)
      }
    }
    else if (windowTop > workTop) {
      $workHeader.addClass('fixed-header');
      $xBtn.addClass('fixed-btn');
      $workHeader.css('top', 0);
      $xBtn.css('top', 20)
    }
    else {
      $workHeader.removeClass('fixed-header');
      $workHeader.css('top', 0);

      if ($window.width() >= 992) {
        $xBtn.removeClass('fixed-btn');
        $xBtn.css('top', 20)
      }
    }

    //logic for about
    if (windowBottom > aboutBottom) {
      $aboutHeader.removeClass('fixed-header');
      $aboutHeader.css('top', aboutHeaderTop);
    }
    else if (windowTop > aboutTop) {
      $aboutHeader.addClass('fixed-header');
      $aboutHeader.css('top', 0);
    }
    else {
      $aboutHeader.removeClass('fixed-header');
      $aboutHeader.css('top', 0);
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

        //make header image scale up
        $headerImage.addClass('scale-up')

        //give border to title block
        $workHeader.addClass('add-border');

        //give height to hidden content
        $(`#${section} > .work-item-content`).addClass('expanded-content');


        setTimeout(function(){
          //make page expand
          $workHeader.addClass('minimized');
          $workContent.addClass('expanded-column');

          //raise up header image
          $(`#${section} > .work-item-header`).addClass('small-header');

          //add parallax scrolling to header image
          $(`#${section} > .work-item-header > .header-image`).addClass('scroll-header');
          window.openedSection = true;
        }, 300)

        // TweenLite.to($header, 0.6, {width:'25%', ease: Power2.easeInOut, delay: 0.3});
        // TweenLite.to($workContent, 0.6, {width:'75%', left: '25%', ease: Power2.easeInOut, delay: 0.3, onComplete: function(){
        //   //when page expanded, raise up header image
        //   $(`#${section} > .work-item-header`).addClass('small-header');

        //   //add parallax scrolling to header image
        //   $(`#${section} > .work-item-header > .header-image`).addClass('scroll-header');
        //   window.openedSection = true;

        // }});

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
      }});


    })
  })





  //*** CLOSE BUTTON ANIMATION ***//
  $xBtn.click(function(e){
    e.stopPropagation();
    let $openedElem = $('.opened');

    TweenLite.to($body, 0.4, {scrollTop: $workContent.offset().top, onComplete: function () {

      //drop down header
      $itemHeader.removeClass('small-header')

      //scale down header image
      $headerImage.removeClass('scale-up')

      //remove parallax scrolling off header image
      //$headerImage.css({'background-position': `center 0px`});
      $headerImage.removeClass('scroll-header');
      window.openedSection = false;

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
        $workHeader.removeClass('minimized');
        $workContent.removeClass('expanded-column');

        //show hidden sections again
        $('.work-content > div').removeClass('hide-section')
        $window.scrollTop($openedElem.offset().top)

        //remove border from title block
        $workHeader.removeClass('add-border');
      }, 800)


      // //close page
      // TweenLite.to($header, 0.6, {width:'33.33333333%', delay: 0.8, ease: Power3.easeInOut});
      // TweenLite.to($workContent, 0.6, {width:'66.66666667%', left: '33.3%', delay: 0.8, ease: Power3.easeInOut, onComplete: function(){
      //   //after page closed, remove height from hidden content
      //   $itemContent.removeClass('expanded-content');

      //   //show hidden sections again
      //   $('.work-content > div').removeClass('hide-section')
      //   $window.scrollTop($openedElem.offset().top)

      //   //remove border from title block
      //   $header.removeClass('add-border');
      // }});
    }})

  })




})


