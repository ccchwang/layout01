import React from 'react';
import { Row, Col } from 'react-bootstrap'

export default function Header() {

  return (
    <Row id="header" className="show-grid">

      <Col md={4} />

      <svg className="intro">
        <text textAnchor="start" x="10" y="100" className="text text-stroke to-fill" clipPath="url(#text1)">Chloe</text>
        <text textAnchor="start" x="10" y="200" className="text text-stroke to-fill" clipPath="url(#text2)">Hwang</text>
        <text textAnchor="start" x="10" y="300" className="text text-stroke to-fill" clipPath="url(#text3)">—</text>
        <text textAnchor="start" x="10" y="350" className="text text-stroke" id="test" clipPath="url(#text4)">Frontend Web Developer</text>


        <defs>
          <clipPath id="text1">
            <text textAnchor="start" x="10" y="100" className="text">Chloe</text>
          </clipPath>
          <clipPath id="text2">
            <text textAnchor="start" x="10" y="200" className="text">Hwang</text>
          </clipPath>
          <clipPath id="text3">
            <text textAnchor="start" x="10" y="300" className="text">—</text>
          </clipPath>
          <clipPath id="text4">
            <text textAnchor="start" x="10" y="350" className="text" id="test" >Frontend Web Developer</text>
          </clipPath>
        </defs>
      </svg>



      <Col md={8} id="header-content" >


          <div className="top" />
          <div className="bottom" />
          <div className="left" />



      <div id="header-img">
        <div id="header-text">

        </div>
        </div>
      </Col>


      <div id="header-overlay" />

    </Row>

  )


}
