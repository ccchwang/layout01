import React from 'react';

export default function Rdi () {
  return (
    <div className="work-item closed small-screen" id="rdi">
      {/* RDI - header image */}
      <div className="work-item-header">
        <div className="header-image img-responsive" style={{backgroundImage: "url('/public/images/rdi.jpg')"}} />
        <div className="header-text-wrapper">
          <h1 className="header-title">
            react-dynamic-UI
          </h1>
          <div className="border-wrapper">
            <div className="border-top" />
            <div className="border-right" />
            <div className="border-bottom" />
            <div className="border-left" />
          </div>
          <div className="subtitle-wrapper">
            <p className="header-subtitle">
              UI library for React.js
            </p>
            <p style={{marginTop: '-10px'}} className="header-subtitle">
              Node.js, React.js, CSS3, HTML5
            </p>
          </div>
        </div>
      </div>

      {/* RDI - content */}
      <section className="work-item-content about-text">
        {/* blurb */}
        <div className="work-item-section content-padding blurb max-width">
          <p>
            <span style={{fontWeight: '600'}}>react-dynamic-UI is a UI toolkit for React.js that offers components with built-in animation.</span> Why yet <span style={{fontStyle: 'italic'}}>another</span> UI library? My goal was to fulfill a need for UI building blocks that can animate out of the box while also being native to React.js. The components animate based on user interaction, i.e. scroll and hover. Users can mix and match components and animation effects to achieve a truly custom design. I hope that react-dynamic-UI will make it easier for others to implement UI animations into their next React app.
          </p>
        </div>

        {/* features */}
        <div className="work-item-section content-padding long centered" style={{backgroundColor: '#333', color: 'white'}}>
          <div className="features-blurb">
            <div className="about-heading-text">
              Features<span className="divider light" />
            </div>

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
          <div className="about-heading-text">
            Demo Typography<span className="divider" />
          </div>

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

          <div className="about-heading-text">
            Demo Colors<span className="divider" />
          </div>

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
            <div className="about-heading-text">
              The Stack<span className="divider" />
            </div>

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

        {/* src */}
        <div className="work-item-section content-padding max-width">
          <div className="next-btn rdi">
            <span>Next</span>
          </div>
        </div>
      </section>
    </div>
  )
}

