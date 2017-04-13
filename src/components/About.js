import React from 'react';
import { Row, Col } from 'react-bootstrap'

export default function About () {

  return (
    <Row className="show-grid">

      <Col xs={12} md={4} id="about-header" className="title-block">
        <h1 className="title-text">about</h1>
      </Col>

      <Col xs={12} md={8}>
        <h1>About</h1>
      </Col>

    </Row>
  )


}
