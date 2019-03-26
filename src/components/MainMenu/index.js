import React from 'react';
import Menu from './menu';

export default function () {
  const scrollToElement = (section) => {
    let elementTop = document.getElementById(`${section}-main`).offsetTop

    window.scroll({ top: elementTop, left: 0, behavior: 'smooth' });
  }

  return (
    <div id="menu">
      <Menu
        type="vertical"
        margin={60}
      >
        <div id="menu-btn" className="button">
          <img src="./public/images/bars.png" id="menu-icon" />
        </div>
        <div onClick={() => scrollToElement('about')} id="about-btn" className="button">
          about
        </div>
        <div onClick={() => scrollToElement('work')} id="work-btn" className="button">
          work
        </div>
        <div onClick={() => scrollToElement('contact')} id="contact-btn" className="button">
          contact
        </div>
      </Menu>
    </div>
  )
}




