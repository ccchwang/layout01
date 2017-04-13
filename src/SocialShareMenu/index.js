import React from 'react';
import Menu from './menu'

export default function SocialShareMenu () {

  return (
    <Menu
      type="circle"
      margin={120}
    >
      <div className="button">
        <img src="/public/images/favorite-5-16.png" />
      </div>
      <div className="button">
        <img src="/public/images/facebook-24.png" />
      </div>
      <div className="button">

      </div>
      <div className="button">
        <img src="/public/images/email-3-24.png" />
      </div>
      <div className="button">
        <img src="/public/images/pinterest-6-24.png" />
      </div>
      <div className="button">
        <img src="/public/images/instagram-6-24.png" />
      </div>
      <div className="button"><img src="/public/images/twitter-24.png" /></div>
    </Menu>
  )
}




