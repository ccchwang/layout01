import React from 'react';
import { Row, Col } from 'react-bootstrap'

export default function Header() {

  return (
    <Row className="show-grid">
      <Col xs={12} id="header">

      <Col md={4}/>

      <Col md={8} id="header-content" >
      <div id="header-img">
        <div id="header-text">
          <h1>Hello!</h1>
          <br /><br /><br /><br />
          <h1>I'm Chloe.</h1>
          <br /><br />
          <h1>_</h1>
        </div>
        </div>
      </Col>

      <div id="header-overlay" />
      </Col>

    </Row>

  )


}
