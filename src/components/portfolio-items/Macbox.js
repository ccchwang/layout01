import React from 'react';

export default function Rdi () {

  return (
    <div className="work-item closed small-screen" id="macbox">

      {/* RDI - header image */}
      <div className="work-item-header">
        <div className="header-image img-responsive" style={{backgroundImage: "url('/public/images/3.png')"}} />
        <div className="header-text-wrapper">
          <h1 className="header-title">Macbox</h1>
          <div className="border-wrapper">
            <div className="border-top" />
            <div className="border-right" />
            <div className="border-bottom" />
            <div className="border-left" />
          </div>
          <div className="subtitle-wrapper">
            <p className="header-subtitle">Prototype e-commerce site</p>
            <p style={{marginTop: '-10px'}} className="header-subtitle">NERD Stack, React-Redux, CSS3</p>
          </div>
        </div>
      </div>

      {/* Macbox - content */}
      <section className="work-item-content about-text">

        {/* blurb */}
        <div className="work-item-section content-padding blurb">
          <p>Macbox is a prototype e-commerce site.</p>
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
        <div className="work-item-section content-padding long">

          <div className="about-heading-text">Typography<span className="divider" /></div>
          <br />
          <div className="font-tab">
            <span className="font-heading">Tenor Sans</span>
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



        <div className="work-item-section content-padding" style={{borderBottom: '1px solid gainsboro'}}>
          <div className="about-heading-text">Src<span className="divider" /></div>
          <br />
          <p>Code: <a href="https://github.com/chloehwang/macbox" target="_blank" rel="noopener noreferrer">github.com/chloehwang/macbox</a></p>
          <p>Demo: <a href="https://macbox.herokuapp.com/" target="_blank" rel="noopener noreferrer">macbox.herokuapp.com</a></p>
          <br /><br /><br />
          <div className="next-btn"><span>Next</span></div>
        </div>
      </section>
    </div>
  )

}

