import React from 'react';
import { Row, Col } from 'react-bootstrap'

export default function About () {

  return (
    <Row id='about-main' className="show-grid" style={{position: 'relative'}}>

      <Col xs={12} md={4} id="about-header" className="title-block">
        <h1 className="title-text">about</h1>
      </Col>

      <Col className="about-content" xs={12} md={8}>
        <div style={{fontSize: '28px', fontStyle: 'italic'}}>I’m a <span  className='intro-emphasis'>FRONTEND WEB DEVELOPER</span> specializing in <span  className='intro-emphasis'>JAVASCRIPT</span> and the <span  className='intro-emphasis'>NERD stack.</span> I'm currently seeking a creative role that will allow me to build stunning UX/UI. You can find my resume <span className='intro-emphasis'>HERE.</span></div>
<br /><br />
<div className="about-text">
  <p>After years of dabbling in web design during my past life as a nonprofit fundraiser, I knew it was time to turn my side hustle into my main job. The art and science of building beautiful websites captured my imagination by providing the same creative outlet as my other passions in interior decorating and graphic design, while also being technical enough to pose a daily challenge. That's why I decided to take the plunge into web development, and I couldn’t be happier.</p>
  <br />
  <p>I am interested in interactive design and building immersive experiences. Currently, I'm learning the 3D library three.js to further my skills in _____.</p>
  <br /><br />
  {/*** TOOLBOX ***/}
  <div className="about-heading-text">Toolbox<span className="divider" /></div>
    <br />
    <span className="mini-heading">Preferred Stack</span>
    <br />
    <ul>
      <li>Node.js</li>
      <li>Express</li>
      <li>PostgreSQL/Sequelize</li>
      <li>React.js</li>
    </ul>
    <br />
    <span className="mini-heading">Frontend Tools</span>
    <br />
    <ul>
      <li>CSS3</li>
      <li>HTML5</li>
      <li>Sass</li>
      <li>jQuery</li>
    </ul>
    <br />
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
    <br />
    <span className="mini-heading">Development practices</span>
    <br />
    <ul>
      <li>Agile development</li>
      <li>Test-driven development (Jasmine, Mocha, Chai)</li>
    </ul>
    <br /><br />

    {/*** TALKS ***/}
    <div className="about-heading-text">My Talks<span className="divider" /></div>
    <br />
    {/*** tech talk ***/}
    <div className="video-container">
      <span className="video-date">March 2017</span>
      <span className="video-title" style={{padding: '0 150px'}}>How to Leverage React.js for Beautiful UI</span>
      <br />
      <iframe width="560" height="315" src="https://www.youtube.com/embed/75XmHauQNdA" frameBorder="0" allowFullScreen />
    </div>

    {/*** stackathon ***/}
    <div className="video-container">
      <span className="video-date">March 2017</span>
      <span className="video-title" style={{padding: '0 110px'}}>Introducing a New UI Animation Library for React.js</span>
      <br />
      <iframe width="560" height="315" src="https://www.youtube.com/embed/krAzPZE3s1I" frameBorder="0" allowFullScreen />
    </div>

    {/*** capstone ***/}
    <div className="video-container">
      <span className="video-date">April 2017</span>
      <span className="video-title" style={{padding: '0 110px'}}>Presenting Omni:<br />A Dream Journal/Analysis App</span>
      <br />
      <iframe width="560" height="315" src="https://www.youtube.com/embed/VQYodA9GZ20" frameBorder="0" allowFullScreen />
    </div>


    <br /><br />

    {/*** PAST LIFE ***/}
    <div className="about-heading-text">Past Life<span className="divider" /></div>
  </div>






      </Col>

    </Row>
  )


}
