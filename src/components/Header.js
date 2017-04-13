import React from 'react';
import { Row, Col } from 'react-bootstrap'
import SocialShareMenu from '../SocialShareMenu'

export default function Header() {

  return (
    <Row className="show-grid">
      <Col xs={12} id="header">


      <SocialShareMenu />
      <Col md={4}/>

      <Col md={8} id="header-content" >
      <div id="header-img">
        <div id="header-text">
          <h1>Chloe</h1>
          <h1>Hwang</h1>
          <h1 style={{marginTop: '-25px'}}>—</h1>
          <p>Frontend Software Engineer</p>
        </div>
        </div>
      </Col>



      <div id="header-overlay" />

      </Col>

    </Row>

  )


}
