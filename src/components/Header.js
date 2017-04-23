import React from 'react';
import { Row, Col } from 'react-bootstrap'

export default function Header() {

  return (
    <Row id="header" className="show-grid">

      <Col md={4} />

      <Col md={8} id="header-content" >

      <div id="header-img">
        <div id="header-text">



<svg className="intro">

  <text textAnchor="start" x="10" y="100" className="text text-stroke" clipPath="url(#text1)">Chloe</text>
  <text textAnchor="start" x="10" y="200" className="text text-stroke" clipPath="url(#text2)">Hwang</text>
  <text textAnchor="start" x="10" y="300" className="text text-stroke" clipPath="url(#text3)">—</text>


  <text textAnchor="start" x="10" y="100" className="text text-stroke text-stroke-2" clipPath="url(#text1)">Chloe</text>
  <text textAnchor="start" x="10" y="200" className="text text-stroke text-stroke-2" clipPath="url(#text2)">Hwang</text>
  <text textAnchor="start" x="10" y="300" className="text text-stroke text-stroke-2" clipPath="url(#text3)">—</text>



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
  </defs>
</svg>







          <p id="fade-in-text">Frontend Web Developer</p>
        </div>
        </div>
      </Col>


      <div id="header-overlay" />

    </Row>

  )


}
