import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <Row className="show-grid">
      <Col xs={12} id="header">
        <div id="header-overlay" />

        <div id="footer-text">
          <p className="big" style={{fontSize: '70px', marginTop: '-15px'}}>Ch</p>
          <p className="big" style={{fontSize: '56px', marginTop: '-35px'}}>loe</p>
          <p className="small">Hwang</p>
        </div>
      </Col>
    </Row>
  )
}
