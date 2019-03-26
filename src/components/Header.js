import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function Header() {
  return (
    <Row id="header" className="show-grid" style={{zIndex: 20}}>
      <div id="header-overlay" />

      <Col md={4} />

      <Col md={8} id="header-main" >
        <svg className="intro">
          <text textAnchor="start" x="10" id="svg-text-1" className="text text-stroke" clipPath="url(#text1)">Alice</text>
          <text textAnchor="start" x="10" id='svg-text-2' className="text text-stroke" clipPath="url(#text2)">Walker</text>
          <text textAnchor="start" x="10" id='svg-text-3' className="text text-stroke" clipPath="url(#text3)">—</text>
          <text textAnchor="start" x="10" className="text text-stroke svg-text-4" id="small-text" clipPath="url(#text4)">Frontend Web Developer</text>

          <defs>
            <clipPath id="text1">
              <text textAnchor="start" x="10" className="text">Alice</text>
            </clipPath>
            <clipPath id="text2">
              <text textAnchor="start" x="10" className="text">Walker</text>
            </clipPath>
            <clipPath id="text3">
              <text textAnchor="start" x="10" className="text">—</text>
            </clipPath>
            <clipPath id="text4">
              <text textAnchor="start" x="10" className="text" id="small-text">Frontend Web Developer</text>
            </clipPath>
          </defs>
        </svg>

        <div id="header-border">
          <div id="header-img" />
        </div>
      </Col>
    </Row>
  )
}
