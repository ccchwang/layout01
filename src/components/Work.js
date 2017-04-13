import React from 'react';
import { Row, Col } from 'react-bootstrap'

export default function Work () {

  return (
    <Row id='work-main' className="show-grid" style={{position: 'relative', height: '400vh'}}>

      <Col xs={12} md={4} className="work-header title-block">
        <h1  className="title-text">work</h1>
      </Col>

      <Col xs={12} md={8} id="work-content">
      <div className="work-item" style={{backgroundImage: "url('/public/images/3.png')"}} />
        <div className="work-item" style={{backgroundImage: "url('/public/images/1.png')"}} />
        <div className="work-item" style={{backgroundImage: "url('/public/images/2.png')"}} />

        <div className="work-item" style={{backgroundImage: "url('/public/images/4.png')"}} />
      </Col>

    </Row>
  )


}
