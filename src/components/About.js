import React from 'react';
import { Row, Col } from 'react-bootstrap'

export default function About () {

  return (
    <Row className="show-grid">

      <Col xs={12} md={4} id="about-header" className="title-block">
        <h1 className="title-text">about</h1>
      </Col>

      <Col className="about-content" xs={12} md={8}>
      <div className="try">
      <p>SEE MORE</p>
      </div>
        <p className="about-heading-text">Art Direction</p>
        <p className="about-text">Starting with basic websites several years ago I found myself working as an Art Director for complex projects with a holistic approach soon. Visually appealing designs, subtle details and brand guidelines combined to innovative interfaces across various touch points became my daily companion.</p>
        <p className="about-heading-text">Art Direction</p>
        <p className="about-text">Starting with basic websites several years ago I found myself working as an Art Director for complex projects with a holistic approach soon. Visually appealing designs, subtle details and brand guidelines combined to innovative interfaces across various touch points became my daily companion.</p>

      </Col>

    </Row>
  )


}
