import React from 'react';
import { Row, Col } from 'react-bootstrap'

export default function Header() {

  return (
    <Row id="header" className="show-grid">

      <Col md={4} />

      <Col md={8} id="header-content" >
      <div id="header-img">
        <div id="header-text">
          <h1>Chloe</h1>
          <h1>Hwang</h1>
          <h1 id="header-divider">—</h1>
          <p>Frontend Web Developer</p>
        </div>
        </div>
      </Col>


      <div id="header-overlay" />

    </Row>

  )


}
