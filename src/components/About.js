import React from 'react';
import { Row, Col } from 'react-bootstrap'

export default function About () {

  return (
    <Row className="show-grid" style={{position: 'relative'}}>

      <Col xs={12} md={4} id="about-header" className="title-block">
        <h1 className="title-text">about</h1>
      </Col>

      <Col className="about-content" xs={12} md={8}>
        <p className="about-heading-text">About</p>
        <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et lorem posuere, pellentesque ex sit amet, bibendum nibh. Fusce sed massa orci. Etiam hendrerit pretium nisl, vitae accumsan massa cursus aliquet. Sed lobortis id mi vitae gravida. Praesent ut porttitor eros, vitae eleifend velit. Suspendisse quis elit quis nunc convallis sagittis..</p>
        <p className="about-heading-text">The Stack</p>
        <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et lorem posuere, pellentesque ex sit amet, bibendum nibh. Fusce sed massa orci. Etiam hendrerit pretium nisl, vitae accumsan massa cursus aliquet. Sed lobortis id mi vitae gravida. Praesent ut porttitor eros, vitae eleifend velit.</p>

      </Col>

    </Row>
  )


}
