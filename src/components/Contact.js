import React from 'react';
import { Row, Col } from 'react-bootstrap'

export default function Contact () {

  return (
    <Row id='contact-main' className="show-grid" style={{position: 'relative'}}>

      <Col xs={12} md={4} id="contact-header" className="title-block">
        <h1 className="title-text">contact</h1>
      </Col>

      <Col className="contact-content content-padding" xs={12} md={8}>
        <div style={{maxWidth: '850px', margin: '0 auto'}}>

          {/* INTRO */}
          <div className="about-intro">I’m currently looking for new opportunities in Washington, DC.</div>
          <br />
          {/* SHORT BLURB */}
          <div className="about-text blurb">
            <p>I'm most interested in crafting digital experiences at creative agencies or advocacy organizations. If you'd like to collaborate or discuss an opportunity, please don't hesitate to contact me.</p>
            <br /><br />
            <span className="video-date">Reach me at:</span>
            <div className="contact-toolbar">
              <h4>Github</h4>
              <h4>LinkedIn</h4>
              <h4>Email</h4>
              <h4>Resume</h4>
            </div>
          </div>

        </div>
      </Col>

    </Row>
  )


}
