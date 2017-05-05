import React from 'react';
import { Row, Col } from 'react-bootstrap'

export default function Work () {

  return (
    <Row id='work-main' className="show-grid" style={{position: 'relative'}}>

      <div className="title-block col-md-4" id="work-header">
        <div>
        <h1  className="title-text">work</h1>
        </div>
      </div>


      <Col xs={12} md={8} className="work-content">

        {/*** CLOSE BUTTON ***/}
        <div className="x-btn">
          <p>X</p>
          <div className="top" />
          <div className="right" />
          <div className="bottom" />
          <div className="left" />
        </div>


        {/*** OMNI ***/}
        <div className="work-item closed small-screen" id="omni">

          {/* OMNI - header image */}
          <div className="work-item-header">
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
                <p style={{marginTop: '-10px'}} className="header-subtitle">NERD Stack, A-Frame, Victory</p>
              </div>
            </div>
          </div>

          {/* OMNI - content */}
          <section className="work-item-content about-text">

            {/* blurb */}
            <div className="work-item-section content-padding">
              <p>Omni believes that dreams can hold the key to the inner depths of our mind. As a dream journaling app, Omni gives users the ability to log their dreams via web and mobile. Once logged, Omni uses Indico’s natural language processing API to analyze the values of five key emotions in each dream - surprise, anger, fear, sadness, and joy. Omni then uses these values to produce a unique 3D/VR representation of the dream - lovingly called a dream ‘sprite’.</p>
            </div>

            {/* features */}
            <div className="work-item-section content-padding long centered" style={{backgroundColor: '#333', color: 'white'}}>
              <div style={{width: "425px"}}>
                <div className="about-heading-text">Features<span className="divider light" /></div>
                <br />
                <span className="mini-heading" style={{color: '#f7fb8e'}}>Mobile App</span>
                <ul>
                  <li><p>Add a new dream entry.</p></li>
                  <li><p>View past dream entries.</p></li>
                  <li><p>For each entry, view corresponding dream sprite in 3D and VR.</p></li>
                  <li><p>View public dream entries of other users.</p></li>
                  <li><p>View certain sleep and dream statistics.</p></li>
                </ul>
                <br />
                <span className="mini-heading" style={{color: '#f7fb8e'}}>Web App</span>
                <ul>
                  <li><p>All functionalities of mobile.</p></li>
                  <li><p>Edit/delete a dream.</p></li>
                  <li><p>View personalized dashboard of sleep and dream statistics, such as hours slept in last week, average of emotions for all dreams, etc.</p></li>
                  <li><p>Explore 3D realm of the public dreams of other users, and be able to read those dreams.</p></li>
                </ul>
              </div>
            </div>

            {/* typography & colors */}
            <div className="work-item-section content-padding long">

              <div className="about-heading-text">Typography<span className="divider" /></div>
              <br />
              <div className="font-tab">
                <span className="font-heading">Quicksand</span>
              </div>
              <br />
              <div className="font-tab">
                <span className="font-heading">Open Sans</span>
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
            <div className="work-item-section content-padding long" style={{backgroundColor: '#333', color: 'white'}}>
              <div className="about-heading-text">Presentation<span className="divider light" /></div>
              <br /><br /><br />
              <div className="video-container">
                <span className="video-date" style={{color: '#f7fb8e'}}>April 2017</span>
                <span className="video-title">Presenting Omni:<br />A Dream Journal/Analysis App</span>
                <br />
                <iframe style={{width: '100%'}} height="315" src="https://www.youtube.com/embed/VQYodA9GZ20" frameBorder="0" allowFullScreen />
              </div>
            </div>

            <div className="work-item-section content-padding" style={{borderBottom: '1px solid gainsboro'}}>
              <div className="next-btn"><span>Next</span></div>
            </div>
          </section>
        </div>


        {/*** RDI ***/}
        <div className="work-item closed" id="rdi">

          {/* RDI - header image */}
          <div className="work-item-header">
            <div className="header-image img-responsive" style={{backgroundImage: "url('/public/images/3.png')"}} />

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
                <p style={{marginTop: '-5px'}} className="header-subtitle">Node.js, React.js, CSS3, HTML5</p>
              </div>
            </div>
          </div>

          {/* OMNI - content */}
          <div className="work-item-content">
            <p className="about-heading-text">rdi</p>
            <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et lorem posuere, pellentesque ex sit amet, bibendum nibh. Fusce sed massa orci. Etiam hendrerit pretium nisl, vitae accumsan massa cursus aliquet. Sed lobortis id mi vitae gravida. Praesent ut porttitor eros, vitae eleifend velit. Suspendisse quis elit quis nunc convallis sagittis..</p>
            <p className="about-heading-text">The Stack</p>
            <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et lorem posuere, pellentesque ex sit amet, bibendum nibh. Fusce sed massa orci. Etiam hendrerit pretium nisl, vitae accumsan massa cursus aliquet. Sed lobortis id mi vitae gravida. Praesent ut porttitor eros, vitae eleifend velit.</p>
            <p className="about-heading-text">About</p>
            <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et lorem posuere, pellentesque ex sit amet, bibendum nibh. Fusce sed massa orci. Etiam hendrerit pretium nisl, vitae accumsan massa cursus aliquet. Sed lobortis id mi vitae gravida. Praesent ut porttitor eros, vitae eleifend velit. Suspendisse quis elit quis nunc convallis sagittis..</p>
            <p className="about-heading-text">The Stack</p>
            <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et lorem posuere, pellentesque ex sit amet, bibendum nibh. Fusce sed massa orci. Etiam hendrerit pretium nisl, vitae accumsan massa cursus aliquet. Sed lobortis id mi vitae gravida. Praesent ut porttitor eros, vitae eleifend velit.</p>
          </div>


        </div>

        {/*** MACBOX ***/}
        <div className="work-item closed" id="macbox">

          {/* OMNI - header image */}
          <div className="work-item-header macbox">
            <div className="header-image img-responsive" style={{backgroundImage: "url('/public/images/macbox.png')"}} />
            <div className="header-text-wrapper">
              <h1 className="header-title">Macbox</h1>
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
            <p className="about-heading-text">About</p>
            <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et lorem posuere, pellentesque ex sit amet, bibendum nibh. Fusce sed massa orci. Etiam hendrerit pretium nisl, vitae accumsan massa cursus aliquet. Sed lobortis id mi vitae gravida. Praesent ut porttitor eros, vitae eleifend velit. Suspendisse quis elit quis nunc convallis sagittis..</p>
            <p className="about-heading-text">The Stack</p>
            <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et lorem posuere, pellentesque ex sit amet, bibendum nibh. Fusce sed massa orci. Etiam hendrerit pretium nisl, vitae accumsan massa cursus aliquet. Sed lobortis id mi vitae gravida. Praesent ut porttitor eros, vitae eleifend velit.</p>
            <p className="about-heading-text">About</p>
            <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et lorem posuere, pellentesque ex sit amet, bibendum nibh. Fusce sed massa orci. Etiam hendrerit pretium nisl, vitae accumsan massa cursus aliquet. Sed lobortis id mi vitae gravida. Praesent ut porttitor eros, vitae eleifend velit. Suspendisse quis elit quis nunc convallis sagittis..</p>
            <p className="about-heading-text">The Stack</p>
            <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et lorem posuere, pellentesque ex sit amet, bibendum nibh. Fusce sed massa orci. Etiam hendrerit pretium nisl, vitae accumsan massa cursus aliquet. Sed lobortis id mi vitae gravida. Praesent ut porttitor eros, vitae eleifend velit.</p>
          </div>


        </div>

        {/*** NONPROF ***/}


      </Col>

    </Row>
  )


}

