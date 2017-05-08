import '../../public/styles/main.scss'

import React, {Component} from 'react';
import MainMenu from '../MainMenu'
import { Grid, Row, Col } from 'react-bootstrap'

export default class extends Component {

  render() {
    return (
      <Grid style={{width: '100%'}}>

        <MainMenu />

      {/*Header */}
      <Row id="header" className="show-grid" style={{zIndex: 20}}>
      <div id="header-overlay" />
      <Col md={4} />




      <Col md={8} id="header-main" >

      <svg className="intro">
        <text textAnchor="start" x="10" id="svg-text-1" className="text text-stroke" clipPath="url(#text1)">Chloe</text>
        <text textAnchor="start" x="10" id='svg-text-2' className="text text-stroke" clipPath="url(#text2)">Hwang</text>
        <text textAnchor="start" x="10" id='svg-text-3' className="text text-stroke" clipPath="url(#text3)">—</text>
        <text textAnchor="start" x="10" className="text text-stroke svg-text-4" id="small-text" clipPath="url(#text4)">Frontend Web Developer</text>

        <defs>
          <clipPath id="text1">
            <text textAnchor="start" x="10" className="text">Chloe</text>
          </clipPath>
          <clipPath id="text2">
            <text textAnchor="start" x="10" className="text">Hwang</text>
          </clipPath>
          <clipPath id="text3">
            <text textAnchor="start" x="10" className="text">—</text>
          </clipPath>
          <clipPath id="text4">
            <text textAnchor="start" x="10" className="text" id="small-text">Frontend Web Developer</text>
          </clipPath>
        </defs>
      </svg>






        <div id="header-border-animation">
          <div className="top" />
          <div className="bottom" />
          <div className="left" />
        </div>

        <div id="header-border">
          <div id="header-img" />

         {/*<video id="vid" loop style={{height: '100%'}}>
          <source src="/public/images/me5950832-palm-leaves-isolated-on-white-background-1280x720-q3-37237.mp4" type="video/mp4" />
        </video>*/}
        </div>
      </Col>




    </Row>

      {/*About */}
      <Row id='about-main' className="show-grid" style={{position: 'relative'}}>

      <Col xs={12} md={4} id="about-header" className="title-block">
        <h1 className="title-text">about</h1>
      </Col>

      <Col className="about-content content-padding" xs={12} md={8}>

      <div style={{maxWidth: '850px', margin: '0 auto'}}>
        {/* INTRO */}
        <div className="about-intro">I’m a <span  className='intro-emphasis'>FRONTEND WEB DEVELOPER</span> specializing in <span  className='intro-emphasis'>JAVASCRIPT</span> and the <span  className='intro-emphasis'>NERD stack.</span> I'm currently seeking a creative role that will allow me to build stunning UX/UI. You can find my resume <a href="../../public/resume/Chloe%20Hwang%20Resume%202017.pdf" target="_blank" rel="noopener noreferrer" style={{color: 'black', textDecoration: 'none'}}><span className="intro-emphasis resume-link">HERE.</span></a></div>
        <br /><br />

        {/* MAIN CONTENT CONTAINER */}
        <div className="about-text">
          {/* SHORT BLURB */}
          <p>After years of dabbling in web design during my past life as a nonprofit fundraiser, I knew it was time to turn my side hustle into my main job. The art and science of building beautiful websites captured my imagination by providing the same creative outlet as my other passions in interior decorating and graphic design, while also being technical enough to pose a daily challenge. That's why I decided to take the plunge into web development, and I couldn’t be happier.</p>
          <br />
          <p>I am interested in interactive design and building immersive experiences. Currently, I'm learning the 3D library three.js to deepen my understanding of WebGL.</p>
          <br /><br /><hr /><br /><br />
          {/*** TOOLBOX ***/}
          <div className="about-heading-text">Toolbox<span className="divider" /></div>
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


          {/*** TALKS ***/}
          <div className="about-heading-text">Talks<span className="divider" /></div>
          <br />
          {/* all videos container */}
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

            {/*** tech talk ***/}
            <div className="video-container">
              <span className="video-date">March 2017</span>
              <span className="video-title">How to Leverage<br />React.js for Beautiful UI</span>
              <br />
              <div className="youtube" data-embed="75XmHauQNdA">
                <img src="https://i.ytimg.com/vi/75XmHauQNdA/sddefault.jpg" />
                <div className="play-button" />
              </div>
            </div>

            {/*** stackathon ***/}
            <div className="video-container">
              <span className="video-date">March 2017</span>
              <span className="video-title">Introducing a New UI<br />Animation Library for React.js</span>
              <br />
              <div className="youtube" data-embed="krAzPZE3s1I">
                <img src="https://i.ytimg.com/vi/krAzPZE3s1I/sddefault.jpg" />
                <div className="play-button" />
              </div>
            </div>

            {/*** capstone ***/}
            <div className="video-container">
              <span className="video-date">April 2017</span>
              <span className="video-title">Presenting Omni:<br />A Dream Journal/Analysis App</span>
              <br />
              <div className="youtube" data-embed="VQYodA9GZ20">
                <img src="https://i.ytimg.com/vi/VQYodA9GZ20/sddefault.jpg" />
                <div className="play-button" />
              </div>
            </div>
          </div>
          <br /><hr /><br /><br />


          {/*** PAST LIFE ***/}
          <div className="about-heading-text">Past Life<span className="divider" /></div>
          <br />
          <span className="mini-heading">Fundraising Manager, ecoAmerica</span><br />
          <span className="mini-heading">Washington, D.C. (Dec 2014-Dec 2016)</span><br />
          <ul style={{marginTop: '5px', paddingBottom: '90px'}}>
            <li>Oversaw production of a grant report, letters of inquiry, and extensive proposal within 6 weeks time. As a result, secured $3M grant as part of two-person team.</li>
            <li>Managed portfolio of 150+ fundraising prospects.</li>
            <li>Led implementation of Salesforce database and became power user for organization.</li>
            <li>Defined and codified workflow systems and processes for newly-formed team.</li>
          </ul>
    </div>
  </div>






      </Col>

    </Row>


      {/*Work */}
      <Row id='work-main' className="show-grid" style={{position: 'relative'}}>

      <div className="title-block col-md-4" id="work-header">
        <div>
        <h1  className="title-text">work</h1>
        </div>
      </div>


      <Col xs={12} md={8} className="work-content">

        {/*** CLOSE BUTTON ***/}
        <div className="x-btn">
          <p />
          <div className="top" />
          <div className="right" />
          <div className="bottom" />
          <div className="left" />
        </div>

        <div className="work-item closed small-screen" id="omni">

      {/* OMNI - header image */}
      <div className="work-item-header">
        <div className="header-image img-responsive" style={{backgroundImage: "url('/public/images/omni.jpg')"}} />
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
            <p style={{marginTop: '-10px'}} className="header-subtitle">NERD Stack, A-Frame, Victory</p>
          </div>
        </div>
      </div>

      {/* OMNI - content */}
      <section className="work-item-content about-text">

        {/* blurb */}
        <div className="work-item-section content-padding blurb max-width">
          <p><span style={{fontWeight: '600'}}>Omni is an app that believes in the power of dreams.</span>
          <br /><br />
          With Omni, users can log their dreams via the web or mobile app. Once logged, Omni analyzes it for the values of five key emotions&mdash;surprise, anger, fear, sadness, and joy. We then uses these values to produce a unique 3D/VR representation of the dream&mdash;lovingly called a dream ‘sprite’. These sprites give users a creative, visual way to explore the underlying emotions behind their dreams.
          <br /><br />
          The app also provides a personalized dashboard of sleep statistics. Lastly, Omni gives you the chance to explore a 3D realm populated with the sprites of other users, allowing you to take a peek into the subconscious of other people.
          </p>
        </div>

        {/* features */}
        <div className="work-item-section content-padding long centered" style={{backgroundColor: '#333', color: 'white'}}>
          <div className="features-blurb">
            <div className="about-heading-text">Features<span className="divider light" /></div>
            <br />
            <span className="mini-heading" style={{color: '#f7fb8e', fontWeight: 900, fontStyle: 'normal'}}>Mobile App</span>
            <ul>
              <li>Add a new dream entry.</li>
              <li>View past dream entries.</li>
              <li>For each entry, view corresponding dream sprite in 3D and VR.</li>
              <li>View public dream entries of other users.</li>
              <li>View certain sleep and dream statistics.</li>
            </ul>
            <br />
            <span className="mini-heading" style={{color: '#f7fb8e', fontWeight: 900, fontStyle: 'normal'}}>Web App</span>
            <ul>
              <li>All functionalities of mobile.</li>
              <li>Edit/delete a dream.</li>
              <li>View personalized dashboard of sleep and dream statistics, such as hours slept in last week, average of emotions for all dreams, etc.</li>
              <li>Explore 3D realm of the public dreams of other users, and be able to read those dreams.</li>
            </ul>
          </div>
        </div>

        {/* typography & colors */}
        <div className="work-item-section content-padding long max-width">

          <div className="about-heading-text">Typography<span className="divider" /></div>
          <br />
          <div className="font-tab">
            <span className="font-heading">Quicksand</span>
            <img className="font-img" src="/public/images/omni-quicksand.png" />
          </div>
          <br />
          <div className="font-tab">
            <span className="font-heading">Open Sans</span>
            <img className="font-img" src="/public/images/omni-opensans.png" />
          </div>

          <br /><br /><br /><br /><br />

          <div className="about-heading-text">Colors<span className="divider" /></div>
          <br />
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap'}}>
            <div className="color-tab">
              <div className="tab-main" style={{backgroundColor: '#242424'}} />
              <div className="tab-title"><span>#242424</span></div>
            </div>
            <div className="color-tab">
              <div className="tab-main" style={{backgroundColor: '#333'}} />
              <div className="tab-title"><span>#333333</span></div>
            </div>
            <div className="color-tab">
              <div className="tab-main" style={{backgroundColor: '#C8D8FC'}} />
              <div className="tab-title"><span>#C8D8FC</span></div>
            </div>
            <div className="color-tab">
              <div className="tab-main" style={{backgroundColor: '#C8B7D5'}} />
              <div className="tab-title"><span>#C8B7D5</span></div>
            </div>
            <div className="color-tab">
              <div className="tab-main" style={{backgroundColor: '#A974D5'}} />
              <div className="tab-title"><span>#A974D5</span></div>
            </div>
          </div>
          <br />
        </div>

        {/* the stack */}
        <div className="work-item-section content-padding long centered" style={{backgroundColor: 'rgb(239, 239, 239)'}}>
          <div>
            <div className="about-heading-text">The Stack<span className="divider" /></div>
            <br />
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>Sequelize/PostgreSQL</li>
              <li>React.js</li>
              <li>React-Native (mobile app)</li>
              <li>A-Frame (3D/VR rendering)</li>
              <li>Victory (data visualization)</li>
              <li>CSS3</li>
              <li>HTML</li>
            </ul>
          </div>
          <br />
        </div>

        {/* presentation */}
        <div className="long" style={{backgroundColor: '#333', color: 'white'}}>
          <div className="max-width content-padding work-item-section">
            <div className="about-heading-text">Presentation<span className="divider light" /></div>
            <br /><br /><br />
            <div className="video-container">
              <span className="video-date" style={{color: '#f7fb8e', fontWeight: 600}}>April 2017</span>
              <span className="video-title">Presenting Omni:<br />A Dream Journal/Analysis App</span>
              <br />
              <div className="youtube" data-embed="VQYodA9GZ20">
                <img src="https://i.ytimg.com/vi/VQYodA9GZ20/sddefault.jpg" />
                <div className="play-button" />
              </div>
            </div>
          </div>
        </div>

        <div className="work-item-section content-padding max-width">
          <div className="about-heading-text">Src<span className="divider" /></div>
          <br />
          <p>Code (mobile): <a href="https://github.com/Omni-Project/omni-mobile" target="_blank" rel="noopener noreferrer">github.com/Omni-Project/omni-mobile</a></p>
          <p>Code (web): <a href="https://github.com/Omni-Project/omni-desktop" target="_blank" rel="noopener noreferrer">github.com/Omni-Project/omni-desktop</a></p>
          <p>Demo (web): <a href="https://omni-project.herokuapp.com/" target="_blank" rel="noopener noreferrer">omni-project.herokuapp.com</a></p>
          <br /><br /><br />
          <div className="next-btn omni"><span>Next</span></div>
        </div>
      </section>
    </div>
        <div className="work-item closed small-screen" id="rdi">

      {/* RDI - header image */}
      <div className="work-item-header">
        <div className="header-image img-responsive" style={{backgroundImage: "url('/public/images/rdi.jpg')"}} />
        <div className="header-text-wrapper">
          <h1 className="header-title">react-dynamic-UI</h1>
          <div className="border-wrapper">
            <div className="border-top" />
            <div className="border-right" />
            <div className="border-bottom" />
            <div className="border-left" />
          </div>
          <div className="subtitle-wrapper">
            <p className="header-subtitle">UI library for React.js</p>
            <p style={{marginTop: '-10px'}} className="header-subtitle">Node.js, React.js, CSS3, HTML5</p>
          </div>
        </div>
      </div>

      {/* RDI - content */}
      <section className="work-item-content about-text">

        {/* blurb */}
        <div className="work-item-section content-padding blurb max-width">
          <p><span style={{fontWeight: '600'}}>react-dynamic-UI is a UI toolkit for React.js that offers components with built-in animation.</span> Why yet <span style={{fontStyle: 'italic'}}>another</span> UI library? My goal was to fulfill a need for UI building blocks that can animate out of the box while also being native to React.js. The components animate based on user interaction, i.e. scroll and hover. Users can mix and match components and animation effects to achieve a truly custom design. I hope that react-dynamic-UI will make it easier for others to implement UI animations into their next React app.</p>
        </div>

        {/* features */}
        <div className="work-item-section content-padding long centered" style={{backgroundColor: '#333', color: 'white'}}>
          <div className="features-blurb">
            <div className="about-heading-text">Features<span className="divider light" /></div>
            <br />
            <ul>
              <li>Easily installable as npm package.</li>
              <li>Natively implements React.js patterns.</li>
              <li>Components include Navbar, Jumbotron, Drawer, and more.</li>
              <li>Components can be configured with various animation effects: fadeUp, fadeAppear, fadeInLeft, and fadeInRight.</li>
              <li>Components are modular and useful on their own or together.</li>
              <li>Designed to be unopinionated and preserve end user’s defined styles and classes.</li>
            </ul>
          </div>
        </div>

        {/* typography & colors */}
        <div className="work-item-section content-padding long max-width">

          <div className="about-heading-text">Demo Typography<span className="divider" /></div>
          <br />
          <div className="font-tab">
            <span className="font-heading">Helvetica Neue</span>
            <img className="font-img" src="/public/images/rdi-helvetica.png" />
          </div>
          <br />
          <div className="font-tab">
            <span className="font-heading">Lato</span>
            <img className="font-img" src="/public/images/rdi-lato.png" />
          </div>

          <br /><br /><br /><br /><br />

          <div className="about-heading-text">Demo Colors<span className="divider" /></div>
          <br />
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap'}}>
            <div className="color-tab">
              <div className="tab-main" style={{backgroundColor: '#437F91'}} />
              <div className="tab-title"><span>#437F91</span></div>
            </div>
            <div className="color-tab">
              <div className="tab-main" style={{backgroundColor: '#9FD7E1'}} />
              <div className="tab-title"><span>#9FD7E1</span></div>
            </div>
            <div className="color-tab">
              <div className="tab-main" style={{backgroundColor: '#CBE8ED'}} />
              <div className="tab-title"><span>#CBE8ED</span></div>
            </div>
            <div className="color-tab">
              <div className="tab-main" style={{backgroundColor: '#F25C5E'}} />
              <div className="tab-title"><span>#F25C5E</span></div>
            </div>
            <div className="color-tab">
              <div className="tab-main" style={{backgroundColor: '#FFA566'}} />
              <div className="tab-title"><span>#FFA566</span></div>
            </div>
          </div>
          <br />
        </div>

        {/* the stack */}
        <div className="work-item-section content-padding long centered" style={{backgroundColor: 'rgb(239, 239, 239)'}}>
          <div>
            <div className="about-heading-text">The Stack<span className="divider" /></div>
            <br />
            <ul>
              <li>Node.js</li>
              <li>React.js</li>
              <li>CSS3</li>
              <li>HTML5</li>
            </ul>
          </div>
          <br />
        </div>






        {/* presentation */}
        <div className="long" style={{backgroundColor: '#333', color: 'white'}}>
          <div className="max-width content-padding work-item-section">
            <div className="about-heading-text">Presentation<span className="divider light" /></div>
            <br /><br /><br />
            <div className="video-container">
              <span className="video-date" style={{color: '#f7fb8e', fontWeight: 600}}>March 2017</span>
              <span className="video-title">Introducing a New UI<br />Animation Library for React.js</span>
              <br />
              <div className="youtube" data-embed="krAzPZE3s1I">
                <img src="https://i.ytimg.com/vi/krAzPZE3s1I/sddefault.jpg" />
                <div className="play-button" />
              </div>
            </div>
          </div>
        </div>

        <div className="work-item-section content-padding max-width">
          <div className="about-heading-text">Src<span className="divider" /></div>
          <br />
          <p>Code: <a href="https://github.com/chloehwang/react-dynamic-UI" target="_blank" rel="noopener noreferrer">github.com/chloehwang/react-dynamic-UI</a></p>
          <p>NPM: <a href="https://www.npmjs.com/package/react-dynamic-ui" target="_blank" rel="noopener noreferrer">npmjs.com/package/react-dynamic-ui</a></p>
          <p>Demo: <a href="https://rdi-demo.herokuapp.com/" target="_blank" rel="noopener noreferrer">rdi-demo.herokuapp.com</a></p>
          <br /><br /><br />
          <div className="next-btn rdi"><span>Next</span></div>
        </div>
      </section>
    </div>
        <div className="work-item closed small-screen" id="macbox">

      {/* macbox - header image */}
      <div className="work-item-header">
        <div className="header-image img-responsive" style={{backgroundImage: "url('/public/images/macbox.jpg')"}} />
        <div className="header-text-wrapper">
          <h1 className="header-title">Macbox</h1>
          <div className="border-wrapper">
            <div className="border-top" />
            <div className="border-right" />
            <div className="border-bottom" />
            <div className="border-left" />
          </div>
          <div className="subtitle-wrapper">
            <p className="header-subtitle">Prototype e-commerce platform</p>
            <p style={{marginTop: '-10px'}} className="header-subtitle">NERD Stack, React-Redux, CSS3</p>
          </div>
        </div>
      </div>

      {/* Macbox - content */}
      <section className="work-item-content about-text">

        {/* blurb */}
        <div className="work-item-section content-padding blurb max-width">
          <p>Macbox is a prototype e-commerce platform built with PostgreSQL for data management in the backend and Redux to keep track of state in the frontend. It is a fullstack Javascript app and fully functional&mdash;users can complete the entire shopping flow, from browse to checkout.
          <br /><br />
          The objective of this project was to hone our skills in schema design, RESTful routes, authentication, and deployment. <span style={{fontWeight: '600'}}>I also used it as a way to focus on design and UI.</span> I learned the tools ReactTransitionGroup and GSAP to add animation to the site. My learnings became the basis of my talk on UI & React.js, where I demoed how to add animation to React apps.</p>
        </div>

        {/* features */}
        <div className="work-item-section content-padding long centered" style={{backgroundColor: '#333', color: 'white'}}>
          <div className="features-blurb">
            <div className="about-heading-text">Features<span className="divider light" /></div>
            <br />
            <ul>
              <li>Users can login/sign up locally, or with Facebook and Google OAuth.</li>
              <li>Both unauthenticated guests and authenticated guests can complete the entire shopping flow:
                <ul>
                  <li>View products</li>
                  <li>Share products on social networks</li>
                  <li>Manage cart</li>
                  <li>Checkout</li>
                  <li>Receive email confirmation</li>
                </ul>
              </li>
              <li>Additionally, authenticated users can:
                <ul>
                  <li>View past orders</li>
                  <li>Leave product reviews</li>
                  <li>Manage wishlists</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        {/* typography & colors */}
        <div className="work-item-section content-padding long max-width">

          <div className="about-heading-text">Typography<span className="divider" /></div>
          <br />
          <div className="font-tab">
            <span className="font-heading">Tenor Sans</span>
            <img className="font-img" src="/public/images/macbox-tenor.png" />
          </div>

          <br /><br /><br /><br /><br />

          <div className="about-heading-text">Colors<span className="divider" /></div>
          <br />
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap'}}>
            <div className="color-tab">
              <div className="tab-main" style={{backgroundColor: '#D66E98'}} />
              <div className="tab-title"><span>#D66E98</span></div>
            </div>
            <div className="color-tab">
              <div className="tab-main" style={{backgroundColor: '#D6ABB1'}} />
              <div className="tab-title"><span>#D6ABB1</span></div>
            </div>
            <div className="color-tab">
              <div className="tab-main" style={{backgroundColor: '#FFDCDC'}} />
              <div className="tab-title"><span>#FFDCDC</span></div>
            </div>
            <div className="color-tab">
              <div className="tab-main" style={{backgroundColor: '#CDF7F4'}} />
              <div className="tab-title"><span>#CDF7F4</span></div>
            </div>
            <div className="color-tab">
              <div className="tab-main" style={{backgroundColor: '#83F1EC'}} />
              <div className="tab-title"><span>#83F1EC</span></div>
            </div>
          </div>
          <br />
        </div>

        {/* the stack */}
        <div className="work-item-section content-padding long centered" style={{backgroundColor: 'rgb(239, 239, 239)'}}>
          <div>
            <div className="about-heading-text">The Stack<span className="divider" /></div>
            <br />
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>Sequelize/PostgreSQL</li>
              <li>React.js</li>
              <li>React-Redux (state)</li>
              <li>ReactTransitionGroup (animation)</li>
              <li>GSAP (animation)</li>
              <li>CSS3</li>
              <li>HTML</li>
            </ul>
          </div>
          <br />
        </div>


        {/* presentation */}
        <div className="long" style={{backgroundColor: '#333', color: 'white'}}>
          <div className="max-width content-padding work-item-section">
            <div className="about-heading-text">Presentation<span className="divider light" /></div>
            <br /><br /><br />
            <div className="video-container">
              <span className="video-date" style={{color: '#f7fb8e', fontWeight: 600}}>March 2017</span>
              <span className="video-title">How to Leverage<br />React.js for Beautiful UI</span>
              <br />
              <div className="youtube" data-embed="75XmHauQNdA">
                <img src="https://i.ytimg.com/vi/75XmHauQNdA/sddefault.jpg" />
                <div className="play-button" />
              </div>
            </div>
          </div>
        </div>



        <div className="work-item-section content-padding max-width">
          <div className="about-heading-text">Src<span className="divider" /></div>
          <br />
          <p>Code: <a href="https://github.com/chloehwang/macbox" target="_blank" rel="noopener noreferrer">github.com/chloehwang/macbox</a></p>
          <p>Demo: <a href="https://macbox.herokuapp.com/" target="_blank" rel="noopener noreferrer">macbox.herokuapp.com</a></p>
          <br /><br /><br />
          <div className="next-btn macbox"><span>Next</span></div>
        </div>
      </section>
    </div>
        <div className="work-item closed small-screen" id="nonprof">

      {/* Nonprof - header image */}
      <div className="work-item-header">
        <div className="header-image img-responsive" style={{backgroundImage: "url('/public/images/nonprof.jpg')"}} />
        <div className="header-text-wrapper">
          <h1 className="header-title">Education for All</h1>
          <div className="border-wrapper">
            <div className="border-top" />
            <div className="border-right" />
            <div className="border-bottom" />
            <div className="border-left" />
          </div>
          <div className="subtitle-wrapper">
            <p className="header-subtitle">Website Design Concept</p>
            <p style={{marginTop: '-10px'}} className="header-subtitle">CSS3, HTML</p>
          </div>
        </div>
      </div>

      {/* Nonprof - content */}
      <section className="work-item-content about-text">

        {/* blurb */}
        <div className="work-item-section content-padding blurb max-width">
          <p>Education for a All is a website design concept for a nonprofit organization. I drew upon my four years of experience in the nonprofit sector to build a layout that effectively serves important NGO information&mdash;including bold sections for donation appeals, key successes, newsletter sign-up, and how to get involved.
          <br /><br />
          I mainly experimented with using CSS borders to create diagonal shapes that could highlight information and be used as a recurring pattern. I also focused on responsive mobile design and colors & typography.
          </p>
        </div>

        {/* features */}
        <div className="work-item-section content-padding long centered" style={{backgroundColor: '#333', color: 'white'}}>
          <div className="features-blurb">
            <div className="about-heading-text">Features<span className="divider light" /></div>
            <br />
            <ul>
              <li>Top content block/hero section to introduce site.</li>
              <li>First content block with headline/introduction and three child columns.</li>
              <li>Second content block with bold heading and button.</li>
              <li>Third content block with two column layout.</li>
              <li>Fourth content block with diagonal overlay design to highlight important information.</li>
              <li>Fifth content block with form for signup and image grid for featured content.</li>
              <li>Footer</li>
            </ul>
          </div>
        </div>

        {/* typography & colors */}
        <div className="work-item-section content-padding long max-width">

          <div className="about-heading-text">Typography<span className="divider" /></div>
          <br />
          <div className="font-tab">
            <span className="font-heading">Montserrat</span>
            <img className="font-img" src="/public/images/nonprof-montserrat.png" />
          </div>
          <br />
          <div className="font-tab">
            <span className="font-heading">Poppins</span>
            <img className="font-img" src="/public/images/nonprof-poppins.png" />
          </div>
          <br />
          <div className="font-tab">
            <span className="font-heading">Raleway</span>
            <img className="font-img" src="/public/images/nonprof-raleway.png" />
          </div>

          <br /><br /><br /><br /><br />

          <div className="about-heading-text">Colors<span className="divider" /></div>
          <br />
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap'}}>
            <div className="color-tab">
              <div className="tab-main" style={{backgroundColor: '#FF798A'}} />
              <div className="tab-title"><span>#FF798A</span></div>
            </div>
            <div className="color-tab">
              <div className="tab-main" style={{backgroundColor: '#FFD867'}} />
              <div className="tab-title"><span>#FFD867</span></div>
            </div>
            <div className="color-tab">
              <div className="tab-main" style={{backgroundColor: '#FFFDAA'}} />
              <div className="tab-title"><span>#FFFDAA</span></div>
            </div>
            <div className="color-tab">
              <div className="tab-main" style={{backgroundColor: '#53D8FB'}} />
              <div className="tab-title"><span>#53D8FB</span></div>
            </div>
            <div className="color-tab">
              <div className="tab-main" style={{backgroundColor: '#0B3059'}} />
              <div className="tab-title"><span>#0B3059</span></div>
            </div>
          </div>
          <br />
        </div>

        {/* the stack */}
        <div className="work-item-section content-padding long centered" style={{backgroundColor: 'rgb(239, 239, 239)'}}>
          <div>
            <div className="about-heading-text">Built With<span className="divider" /></div>
            <br />
            <ul>
              <li>CSS3</li>
              <li>HTML</li>
              <li>jQuery</li>
            </ul>
          </div>
          <br />
        </div>



        <div className="work-item-section content-padding max-width">
          <div className="about-heading-text">Src<span className="divider" /></div>
          <br />
          <p>Code: <a href="https://github.com/chloehwang/education-for-all" target="_blank" rel="noopener noreferrer">github.com/chloehwang/education-for-all</a></p>
          <p>Demo: <a href="https://chloehwang.github.io/education-for-all/" target="_blank" rel="noopener noreferrer">chloehwang.github.io/education-for-all</a></p>
          <br /><br /><br />
          <div className="next-btn nonprof"><span>Next</span></div>
        </div>
      </section>
    </div>



      </Col>

    </Row>

      {/*Contact*/}
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
              <a href="https://github.com/chloehwang" target="_blank" rel="noopener noreferrer"><h4 className="contact-tool">Github</h4></a>
              <a href="https://www.linkedin.com/in/chloehwang/" target="_blank" rel="noopener noreferrer"><h4 className="contact-tool">LinkedIn</h4></a>
              <a href="mailto:c.chloeh@gmail.com?Subject=Let%27s%20Chat"><h4 className="contact-tool">Email</h4></a>
              <a href="../../public/resume/Chloe%20Hwang%20Resume%202017.pdf" target="_blank" rel="noopener noreferrer"><h4 className="contact-tool">Resume</h4></a>
            </div>
          </div>

        </div>
      </Col>

    </Row>

      {/*FOOTER*/}
      <Row className="show-grid">
        <Col xs={12} id="header" style={{display: 'flex', justifyContent: 'center'}}>

        <div id="header-overlay" />
        <div id="footer-text">
          <p className="big" style={{fontSize: '70px', marginTop: '-15px'}}>Ch</p>
          <p className="big" style={{fontSize: '56px', marginTop: '-35px'}}>loe</p>
          <p className="small">Hwang</p>
        </div>

        </Col>

      </Row>
      </Grid>
    )
  }

}
