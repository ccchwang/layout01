import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function Contact () {
  return (
    <Row id='contact-main' className="show-grid" style={{position: 'relative'}}>
      <Col xs={12} md={4} id="contact-header" className="title-block">
        <h1 className="title-text">contact</h1>
      </Col>

      <Col className="contact-content content-padding" xs={12} md={8}>
        <div style={{maxWidth: '850px', margin: '0 auto'}}>
          {/* INTRO */}
          <div className="about-intro">
            I’m currently looking for new opportunities in Washington, DC.
          </div>

          <br />

          {/* SHORT BLURB */}
          <div className="about-text blurb">
            <p>
              I'm most interested in crafting digital experiences at creative agencies or advocacy organizations. If you'd like to collaborate or discuss an opportunity, please don't hesitate to contact me.
            </p>

            <br /><br />

            <span className="video-date">Reach me at:</span>

            <div className="contact-toolbar">
              <a href="https://github.com/chloehwang" target="_blank" rel="noopener noreferrer">
                <h4 className="contact-tool">Github</h4>
              </a>
              <a href="https://www.linkedin.com/in/chloehwang/" target="_blank" rel="noopener noreferrer">
                <h4 className="contact-tool">LinkedIn</h4>
              </a>
              <a href="mailto:c.chloeh@gmail.com?Subject=Let%27s%20Chat">
                <h4 className="contact-tool">Email</h4>
              </a>
              <a href="../../public/resume/Chloe%20Hwang%20Resume%202017.pdf" target="_blank" rel="noopener noreferrer">
                <h4 className="contact-tool">Resume</h4>
              </a>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  )
}
