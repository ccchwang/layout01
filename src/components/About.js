import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function About () {
  return (
    <Row id='about-main' className="show-grid" style={{position: 'relative'}}>
      <Col xs={12} md={4} id="about-header" className="title-block">
        <h1 className="title-text">about</h1>
      </Col>

      <Col className="about-content content-padding" xs={12} md={8}>
        <div style={{maxWidth: '850px', margin: '0 auto'}}>
          {/* INTRO */}
          <div className="about-intro">
            I’m a <span  className='intro-emphasis'>FRONTEND WEB DEVELOPER</span> specializing in <span  className='intro-emphasis'>JAVASCRIPT</span> and the <span  className='intro-emphasis'>NERD stack.</span> I'm currently seeking a creative role that will allow me to build stunning UX/UI. You can find my resume <a href="#" style={{color: 'black', textDecoration: 'none'}}><span className="intro-emphasis resume-link">HERE.</span></a>
          </div>

          <br /><br />

          {/* MAIN CONTENT CONTAINER */}
          <div className="about-text">
            {/* SHORT BLURB */}
            <p> Etiam venenatis arcu a diam venenatis facilisis. Quisque vitae condimentum lectus. In pretium, tortor at ornare accumsan, velit magna rhoncus sapien, non feugiat leo sem sit amet tellus. Curabitur scelerisque dignissim justo, vel eleifend turpis ultricies ut. Cras vel tincidunt quam, ut pretium lectus. Sed maximus est nisi, eget egestas dui elementum id. Aliquam efficitur tincidunt diam non aliquam. Aenean dignissim, ligula quis hendrerit pretium, turpis mauris.</p>

            <br />

            <p>Etiam venenatis arcu a diam venenatis facilisis. Quisque vitae condimentum lectus. In pretium, tortor at ornare accumsan, velit magna rhoncus sapien, non feugiat leo sem sit amet tellus. Curabitur scelerisque dignissim.</p>

            <br /><br /><br /><br />

            {/*** TOOLBOX ***/}
            <div className="about-heading-text">
              Toolbox<span className="divider" />
            </div>

            <br />

            <div style={{display: 'flex', flexWrap: 'wrap'}}>
              <div className="grouped">
                <span className="mini-heading">Preferred Stack</span>
                <br />
                <ul>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>PostgreSQL/Sequelize</li>
                  <li>React.js</li>
                </ul>
              </div>

              <div className="grouped">
                <span className="mini-heading">Frontend Tools</span>
                <br />
                <ul>
                  <li>CSS3</li>
                  <li>HTML5</li>
                  <li>Sass</li>
                  <li>jQuery</li>
                </ul>
              </div>

              <div className="grouped">
                <span className="mini-heading">Experience</span>
                <br />
                <ul>
                  <li>Data visualization (Victory.js)</li>
                  <li>Virtual reality (A-Frame)</li>
                  <li>Mobile apps (React Native)</li>
                  <li>Real-time communications (Socket.io)</li>
                  <li>Wire frames (Balsamiq)</li>
                  <li>Animation (GreenSock)</li>
                  <li>3D modeling (Blender)</li>
                </ul>
              </div>

              <div className="grouped">
                <span className="mini-heading">Development practices</span>
                <br />
                <ul>
                  <li>Agile development</li>
                  <li>Test-driven development (Jasmine, Mocha, Chai)</li>
                </ul>
              </div>
            </div>

            <br /><hr /><br /><br />

          </div>
        </div>
      </Col>
    </Row>
  )
}
