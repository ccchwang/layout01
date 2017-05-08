import React from 'react';
import { Row, Col } from 'react-bootstrap'

export default function Footer() {

  return (
    <Row className="show-grid">
      <Col xs={12} id="header" style={{display: 'flex', justifyContent: 'center'}}>

      <div id="header-overlay" />
      <div id="footer-text">
        <p className="big" style={{fontSize: '75px', marginTop: '-15px'}}>Ch</p>
        <p className="big" style={{fontSize: '60.5px', marginTop: '-35px'}}>loe</p>
        <p className="small">Hwang</p>
      </div>

      </Col>

    </Row>

  )


}
