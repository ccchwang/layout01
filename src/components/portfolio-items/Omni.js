import React from 'react';

export default function Omni () {

  return (
    <div className="work-item closed small-screen" id="omni">

      {/* OMNI - header image */}
      <div className="work-item-header">
        <div className="header-image img-responsive" style={{backgroundImage: "url('/public/images/omni.png')"}} />
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
              <iframe style={{width: '100%'}} height="315" src="https://www.youtube.com/embed/VQYodA9GZ20" frameBorder="0" allowFullScreen />
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
  )

}

