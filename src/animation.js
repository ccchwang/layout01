$(document).ready(function() {
  require('smoothscroll-polyfill').polyfill();

  const Animation = {
    init() {
      this.setVars();
      this.bindEvents();
    },

    setVars() {
      this.window = $(window);
      this.body = $('body');
      this.work = $('#work-main');
      this.about = $('#about-main');
      this.omni = $('#omni');
      this.rdi = $('#rdi');
      this.macbox = $('#macbox');
      this.nonprof = $('#nonprof');
      this.nextBtnOmni = $('.next-btn.omni');
      this.nextBtnRdi = $('.next-btn.rdi');
      this.nextBtnMacbox = $('.next-btn.macbox');
      this.nextBtnNonprof = $('.next-btn.nonprof');
      this.workHeader = $('#work-header');
      this.workContent = $('.work-content');
      this.aboutHeader = $('#about-header');
      this.aboutContent = $('.about-content');
      this.itemHeader = $('.work-item-header');
      this.itemContent = $('.work-item-content');
      this.xBtn = $('.x-btn');
      this.xBtnTop = $('.x-btn > .top');
      this.xBtnRight = $('.x-btn > .right');
      this.xBtnBottom = $('.x-btn > .bottom');
      this.xBtnLeft = $('.x-btn > .left');
      this.xBtnP = $('.x-btn > p');
      this.headerImage = $('.header-image');
    },

    bindEvents() {
      this.stickSections();
      this.openSection();
      this.parallaxHeaders();
      this.setCloseBtn();
      this.loadYoutubeVids();
      this.setNextBtn();
    },

    stickSections() {  //*** MAKE WORK & ABOUT SECTION STICKY
      this.window.on('scroll resize', () => {

        //#work-main: distance from top/bottom of window
        let workTop = this.work.offset().top;
        let workBottom = this.work.height() + workTop;

        //height of all work section content minus height of window
        let workHeaderTop = this.workContent.height() - this.window.height();

        //#about-main
        let aboutTop = this.about.offset().top;
        let aboutBottom = this.about.height() + aboutTop;
        let aboutHeaderTop = this.aboutContent.height() - this.window.height();

        //window
        let windowTop = this.window.scrollTop();
        let windowBottom = this.window.height() + windowTop;

        //logic for work
        if (windowBottom > workBottom) {
          this.workHeader.removeClass('fixed-header');
          this.workHeader.css('top', workHeaderTop);

          if (this.window.width() >= 992) {
            this.xBtn.removeClass('fixed-btn');
            this.xBtn.css('top', workHeaderTop + 20)
          }
        }
        else if (windowTop > workTop) {
          this.workHeader.addClass('fixed-header');
          this.xBtn.addClass('fixed-btn');
          this.workHeader.css('top', 0);
          this.xBtn.css('top', 20)
        }
        else {
          this.workHeader.removeClass('fixed-header');
          this.workHeader.css('top', 0);

          if (this.window.width() >= 992) {
            this.xBtn.removeClass('fixed-btn');
            this.xBtn.css('top', 20)
          }
        }

        //logic for about
        if (windowBottom > aboutBottom) {
          this.aboutHeader.removeClass('fixed-header');
          this.aboutHeader.css('top', aboutHeaderTop);
        }
        else if (windowTop > aboutTop) {
          this.aboutHeader.addClass('fixed-header');
          this.aboutHeader.css('top', 0);
        }
        else {
          this.aboutHeader.removeClass('fixed-header');
          this.aboutHeader.css('top', 0);
        }
      });
    },

    openSection() { //*** TRANSITION ANIMATION ***//
      const sections = ['omni', 'rdi', 'macbox', 'nonprof'];

      sections.forEach((section, i) => {
        let elem = $(`#${section}`);

        elem.click(e => {
          e.stopPropagation();
          this.currSection = elem;

          if (this.currSection.hasClass('opened')) {
            return;
          }

          //make header img unclickable
          this.currSection.removeClass('closed')
          this.currSection.addClass('opened')

          //scroll to section
          window.scroll({
            top: this.currSection.offset().top,
            left: 0,
            behavior: 'smooth'
          });

          setTimeout(() => {
            //hide other sections
            $('.work-content > div.closed').addClass('hide-section');

            //make sure there's no jump when other sections get hidden
            this.window.scrollTop(this.currSection.offset().top)

            //make header image scale up
            this.headerImage.addClass('scale-up')

            //give border to title block
            this.workHeader.addClass('add-border');

            //give height to hidden content
            $(`#${section} > .work-item-content`).addClass('expanded-content');

            setTimeout(() => {
              //make page expand
              this.workHeader.addClass('minimized');
              this.workContent.addClass('expanded-column');

              //raise up header image
              $(`#${section} > .work-item-header`).addClass('small-header');

              //add parallax scrolling to header image
              $(`#${section} > .work-item-header > .header-image`).addClass('scroll-header');
              window.openedSection = true;
            }, 400)

            //show x button
            this.xBtnTop.addClass('animate');
            this.xBtnRight.addClass('animate');
            this.xBtnBottom.addClass('animate');
            this.xBtnLeft.addClass('animate');
            this.xBtnP.addClass('animate');
          }, 400)
        })
      })
    },

    parallaxHeaders() { //*** PARALLAX SCROLLING FOR HEADER IMAGE
      let headerHeight =  this.itemHeader.height();

      this.window.on('scroll', () => {
        if (window.openedSection) {
          let smallHeader = $('.scroll-header');
          let smallHeaderTop = smallHeader.offset().top;
          let smallHeaderHeight = smallHeaderTop + headerHeight;
          let windowTop = this.window.scrollTop();
          let calc = 0;

          if (windowTop > smallHeaderTop && windowTop <= smallHeaderHeight) {
            calc = (windowTop - smallHeaderTop) / 2;
          }
          smallHeader.css({'background-position': `center ${calc}px`});
        }
      });
    },

    setCloseBtn() { //*** CLOSE BUTTON ANIMATION ***//
      this.xBtn.click(e => {
        e.stopPropagation();
        this.openedElem = $('.opened');

        //scroll up section
        window.scroll({
          top: this.workContent.offset().top,
          left: 0,
          behavior: 'smooth'
        });

        setTimeout(() => {
          //drop down header
          this.itemHeader.removeClass('small-header');

          //scale down header image
          this.headerImage.removeClass('scale-up');

          //remove parallax scrolling off header image
          this.headerImage.removeClass('scroll-header');
          this.headerImage.css({'background-position' : 'center 0px'});
          window.openedSection = false;

          //make header img clickable
          this.openedElem.addClass('closed');
          this.openedElem.removeClass('opened');

          //hide x button
          this.xBtnTop.removeClass('animate');
          this.xBtnRight.removeClass('animate');
          this.xBtnBottom.removeClass('animate');
          this.xBtnLeft.removeClass('animate');
          this.xBtnP.removeClass('animate');

          setTimeout(() => {
            //remove height from hidden content
            this.itemContent.removeClass('expanded-content');

            //close page
            this.workHeader.removeClass('minimized');
            this.workContent.removeClass('expanded-column');

            //show hidden sections again
            $('.work-content > div').removeClass('hide-section')

            //make sure there's no jump when hidden sections come back to view
            this.window.scrollTop(this.openedElem.offset().top)

            //remove border from title block
            this.workHeader.removeClass('add-border');
          }, 800)
        }, 500)
      })

    },

    loadYoutubeVids() { //LOAD YOUTUBE VIDS
      var youtube = document.getElementsByClassName( "youtube" );

      [].slice.call(youtube).forEach(video => {
        video.addEventListener( "click", function() {
          var iframe = document.createElement( "iframe" );
              iframe.setAttribute( "frameborder", "0" );
              iframe.setAttribute( "allowfullscreen", "" );
              iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

              this.innerHTML = "";
              this.appendChild( iframe );
        });
      })
    },

    setNextBtn() { //*** NEXT BUTTON ANIMATION ***//
      this.nextBtnOmni.click(e => {
        this.xBtn.trigger( "click" );
        setTimeout(() => {
         this.rdi.trigger( "click" );
        }, 1950)
      })

      this.nextBtnRdi.click(e => {
        this.xBtn.trigger( "click" );
        setTimeout(() => {
         this.macbox.trigger( "click" );
        }, 1950)
      })

      this.nextBtnMacbox.click(e => {
        this.xBtn.trigger( "click" );
        setTimeout(() => {
         this.nonprof.trigger( "click" );
        }, 1950)
      })

      this.nextBtnNonprof.click(e => {
        this.xBtn.trigger( "click" );
        setTimeout(() => {
         this.omni.trigger( "click" );
        }, 1950)
      })
    }
  };

  Animation.init();
})
