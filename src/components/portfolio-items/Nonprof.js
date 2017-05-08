import React from 'react';

export default function EfA () {

  return (
    <div className="work-item closed small-screen" id="nonprof">

      {/* Nonprof - header image */}
      <div className="work-item-header">
        <div className="header-image img-responsive" style={{backgroundImage: "url('/public/images/boy.png')"}} />
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
          <p>Demo: <a href="https://macbox.herokuapp.com/" target="_blank" rel="noopener noreferrer">macbox.herokuapp.com</a></p>
          <br /><br /><br />
          <div className="next-btn nonprof"><span>Next</span></div>
        </div>
      </section>
    </div>
  )

}

