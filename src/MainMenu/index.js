import React from 'react';
import Menu from './menu'

export default function SocialShareMenu () {

  const scrollToElement = (e) => {
    const section = e.target.id.split("-")[0];
    let element;

    if ($(window).width() >= 992) {
      element = section === 'work' ? `#work-content` : `#${section}-header`;
    }
    else {
      element = `#${section}-header`;
    }

    $('body').animate({
      scrollTop: $(element).offset().top
    }, 800);
  }


  return (
    <Menu
      type="horizontal"
      margin={100}
      style={{position: 'fixed', zIndex: '300', left: '30px', top: '30px'}}
    >
      <div className="button">
        =
      </div>
      <div onClick={scrollToElement} id="about-btn" className="button">
        about
      </div>
      <div onClick={scrollToElement} id="work-btn" className="button">
        work
      </div>
      <div onClick={scrollToElement} id="contact-btn" className="button">
        contact
      </div>
    </Menu>
  )
}




