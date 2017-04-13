import React from 'react';
import Menu from './menu'

export default function SocialShareMenu () {

  return (
    <Menu
      type="horizontal"
      margin={100}
      style={{position: 'fixed', zIndex: '300', left: '30px', top: '30px'}}
    >
      <div className="button">
        =
      </div>
      <div className="button">
        about
      </div>
      <div className="button">
        work
      </div>
      <div className="button">
      contact
      </div>
    </Menu>
  )
}




