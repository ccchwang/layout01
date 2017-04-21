import React from 'react';
import Menu from './menu'

export default function SocialShareMenu () {

  const scrollToElement = (e) => {
    const section = e.target.id.split("-")[0];
    let element = `#${section}-header`;

    if ($(window).width() >= 992) {
      element = section === 'work' ? `.work-content` : `#${section}-header`;
    }

    $('body').animate({
      scrollTop: $(element).offset().top
    }, 800);
  }


  return (
    <div id="menu">
    <Menu
      type="vertical"
      margin={60}
    >
      <div id="menu-btn" className="button">
        <img src="/public/images/bars.png" id="menu-icon" />
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
    </div>
  )
}




