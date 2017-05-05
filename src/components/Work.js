import React from 'react';
import Omni from './portfolio-items/Omni';
import Rdi from './portfolio-items/Rdi';
import { Row, Col } from 'react-bootstrap'

export default function Work () {

  return (
    <Row id='work-main' className="show-grid" style={{position: 'relative'}}>

      <div className="title-block col-md-4" id="work-header">
        <div>
        <h1  className="title-text">work</h1>
        </div>
      </div>


      <Col xs={12} md={8} className="work-content">

        {/*** CLOSE BUTTON ***/}
        <div className="x-btn">
          <p>X</p>
          <div className="top" />
          <div className="right" />
          <div className="bottom" />
          <div className="left" />
        </div>

        <Omni />
        <Rdi />



      </Col>

    </Row>
  )


}

