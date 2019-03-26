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
          Aliquam efficitur tincidunt diam non aliquam aenean el dignissim.
          </div>

          <br />

          {/* SHORT BLURB */}
          <div className="about-text blurb">
            <p>
              Mauris sagittis sagittis augue elementum gravida. Vivamus blandit tortor elementum tortor rutrum, sit amet posuere justo elementum. Ut vulputate hendrerit sodales. Nullam eu lectus vitae dui feugiat commodo faucibus in quam. Suspendisse finibus ante sed lorem tempus condimentum. Etiam eu sem at lectus tincidunt dignissim nec ut augue.
            </p>

            <br /><br />

            <span className="video-date">Reach me at:</span>

            <div className="contact-toolbar">
              <a href="#">
                <h4 className="contact-tool">Github</h4>
              </a>
              <a href="#">
                <h4 className="contact-tool">LinkedIn</h4>
              </a>
              <a href="#">
                <h4 className="contact-tool">Email</h4>
              </a>
              <a href="#">
                <h4 className="contact-tool">Resume</h4>
              </a>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  )
}
