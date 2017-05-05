import React from 'react';

export default function EfA () {

  return (
    <div className="work-item closed small-screen" id="nonprof">

      {/* RDI - header image */}
      <div className="work-item-header">
        <div className="header-image img-responsive" style={{backgroundImage: "url('/public/images/3.png')"}} />
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

      {/* Macbox - content */}
      <section className="work-item-content about-text">

        {/* blurb */}
        <div className="work-item-section content-padding blurb">
          <p>Education for a All is a website design concept for a nonprofit organization. I drew upon my four years of experience in the nonprofit space to build a layout that efficiently serves important NGO information - including bold sections for donation appeals, key successes, newsletter sign-up, and how to get involved.
          <br /><br />
          I mostly experimented with using CSS borders to create diagonal shapes that could highlight important information and be used as a recurring pattern. I also focused on
          </p>
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
            </ul>
          </div>
        </div>

        {/* typography & colors */}
        <div className="work-item-section content-padding long">

          <div className="about-heading-text">Typography<span className="divider" /></div>
          <br />
          <div className="font-tab">
            <span className="font-heading">Raleway</span>
          </div>
          <br />
          <div className="font-tab">
            <span className="font-heading">Montserrat</span>
          </div>
          <br />
          <div className="font-tab">
            <span className="font-heading">Poppins</span>
          </div>

          <br /><br /><br /><br /><br />

          <div className="about-heading-text">Colors<span className="divider" /></div>
          <br />
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap'}}>
            <div className="color-tab">
              <div className="tab-main" style={{backgroundColor: '#f56476'}} />
              <div className="tab-title"><span>#f56476</span></div>
            </div>
            <div className="color-tab">
              <div className="tab-main" style={{backgroundColor: '#f7e08e'}} />
              <div className="tab-title"><span>#f7e08e</span></div>
            </div>
            <div className="color-tab">
              <div className="tab-main" style={{backgroundColor: '#fffdaa'}} />
              <div className="tab-title"><span>#fffdaa</span></div>
            </div>
            <div className="color-tab">
              <div className="tab-main" style={{backgroundColor: '#53d8fb'}} />
              <div className="tab-title"><span>#53d8fb</span></div>
            </div>
            <div className="color-tab">
              <div className="tab-main" style={{backgroundColor: '#0b3059'}} />
              <div className="tab-title"><span>#0b3059</span></div>
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
              <li>Javascript</li>
            </ul>
          </div>
          <br />
        </div>



        <div className="work-item-section content-padding" style={{borderBottom: '1px solid gainsboro'}}>
          <div className="about-heading-text">Src<span className="divider" /></div>
          <br />
          <p>Code: <a href="https://github.com/chloehwang/education-for-all" target="_blank" rel="noopener noreferrer">github.com/chloehwang/education-for-all</a></p>
          <p>Demo: <a href="https://macbox.herokuapp.com/" target="_blank" rel="noopener noreferrer">macbox.herokuapp.com</a></p>
          <br /><br /><br />
          <div className="next-btn"><span>Next</span></div>
        </div>
      </section>
    </div>
  )

}

