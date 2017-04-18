import React from 'react';
import { Row, Col } from 'react-bootstrap'

export default function Work () {

  return (
    <Row id='work-main' className="show-grid" style={{position: 'relative', height: '400vh'}}>

      <Col xs={12} md={4} id="work-header" className="title-block">
        <h1  className="title-text">work</h1>
      </Col>

      <Col xs={12} md={8} id="work-content">

         <div className="work-item">
          <div className="work-item-image img-responsive" style={{backgroundImage: "url('/public/images/3.png')"}}/>
          <div className="work-item-box">
            <h1 className="work-item-title">Omni</h1>
          </div>

        </div>

        <div className="work-item">
          <div className="work-item-image img-responsive" style={{backgroundImage: "url('/public/images/macbox.png')"}} />
          <div className="work-item-box" />
          <h1 className="work-item-title">Macbox</h1>
        </div>

        <div className="work-item">
          <div className="work-item-image img-responsive" style={{backgroundImage: "url('/public/images/rdi.jpg')"}} />
          <div className="work-item-box" />
          <h1 className="work-item-title">react-dynamic-UI</h1>
        </div>

        <div className="work-item">
          <div className="work-item-image img-responsive" style={{backgroundImage: "url('/public/images/education.jpg')"}} />
          <div className="work-item-box" />
          <h1 className="work-item-title">Education for All</h1>
        </div>

      </Col>

    </Row>
  )


}
