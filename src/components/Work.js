import React from 'react';
import { Row, Col } from 'react-bootstrap'

export default function Work () {

  return (
    <Row id='work-main' className="show-grid" style={{position: 'relative', height: '400vh'}}>

      <Col xs={12} md={4} id="work-header" className="title-block">
        <h1  className="title-text">work</h1>
      </Col>

      <Col xs={12} md={8} id="work-content">


        {/*** OMNI ***/}
        <div className="work-item closed" id="omni">

          {/* OMNI - header image */}
          <div className="work-item-header omni">
            <div className="header-image img-responsive" style={{backgroundImage: "url('/public/images/3.png')"}} />
            <div className="header-text-wrapper">
              <h1 className="header-title">Omni</h1>
              <div className="border-wrapper">
                <div className="border-top" />
                <div className="border-right" />
                <div className="border-bottom" />
                <div className="border-left" />
              </div>
              <div className="subtitle-wrapper">
                <p className="header-subtitle">Dream analysis app</p>
                <p style={{marginTop: '-5px'}} className="header-subtitle">NERD Stack, A-frame, Victory</p>
              </div>
            </div>
          </div>

          {/* OMNI - content */}
          <div className="work-item-content">
          </div>


        </div>

        {/*** RDI ***/}
        <div className="work-item" id="rdi">
          <div className="work-item-image img-responsive" style={{backgroundImage: "url('/public/images/rdi.jpg')"}} />

          <div className="work-item-header">
            <h1 className="work-item-title" style={{color: '#424242'}}>react-dynamic-UI</h1>
            <div className="border-wrapper">
              <div className="border-top" style={{borderColor: '#424242'}}/>
              <div className="border-right" style={{borderColor: '#424242'}}/>
              <div className="border-bottom" style={{borderColor: '#424242'}}/>
              <div className="border-left" style={{borderColor: '#424242'}}/>
            </div>
            <div className="subtitle-wrapper">
              <p className="work-item-subtitle" style={{color: '#424242'}}>UI library for React.js</p>
              <p style={{marginTop: '-5px', color: '#424242'}} className="work-item-subtitle">CSS3, React.js, Node.js</p>
            </div>
          </div>

        </div>

        {/*** MACBOX ***/}
        <div className="work-item" id="macbox">
          <div className="work-item-image img-responsive" style={{backgroundImage: "url('/public/images/3.png')"}} />

          <div className="work-item-header">
            <h1 className="work-item-title">Macbox</h1>
            <div className="border-wrapper">
              <div className="border-top" />
              <div className="border-right" />
              <div className="border-bottom" />
              <div className="border-left" />
            </div>
            <div className="subtitle-wrapper">
              <p className="work-item-subtitle">Prototype e-commerce site</p>
              <p style={{marginTop: '-5px'}} className="work-item-subtitle">NERD Stack, A-frame, Victory</p>
            </div>
          </div>

        </div>

        {/*** NONPROF ***/}
        <div className="work-item" id="nonprof">
          <div className="work-item-image img-responsive" style={{backgroundImage: "url('/public/images/3.png')"}} />

          <div className="work-item-header">
            <h1 className="work-item-title">Education for All</h1>
            <div className="border-wrapper">
              <div className="border-top" />
              <div className="border-right" />
              <div className="border-bottom" />
              <div className="border-left" />
            </div>
            <div className="subtitle-wrapper">
              <p className="work-item-subtitle">Design concept for nonprofit</p>
              <p style={{marginTop: '-5px'}} className="work-item-subtitle">NERD Stack, A-frame, Victory</p>
            </div>
          </div>

        </div>

      </Col>

    </Row>
  )


}

