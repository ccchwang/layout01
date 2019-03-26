import React from 'react';

export default function Macbox () {
  return (
    <div className="work-item closed small-screen" id="macbox">
      {/* macbox - header image */}
      <div className="work-item-header">
        <div className="header-image img-responsive" style={{backgroundImage: "url('./public/images/macbox.jpg')"}} />
        <div className="header-text-wrapper">
          <h1 className="header-title">
            Macbox
          </h1>
          <div className="border-wrapper">
            <div className="border-top" />
            <div className="border-right" />
            <div className="border-bottom" />
            <div className="border-left" />
          </div>
          <div className="subtitle-wrapper">
            <p className="header-subtitle">
              Prototype e-commerce platform
            </p>
            <p style={{marginTop: '-10px'}} className="header-subtitle">
              NERD Stack, React-Redux, CSS3
            </p>
          </div>
        </div>
      </div>

      {/* Macbox - content */}
      <section className="work-item-content about-text">
        {/* blurb */}
        <div className="work-item-section content-padding blurb max-width">
          <p>
            Macbox is a prototype e-commerce platform built with PostgreSQL for data management in the backend and Redux to keep track of state in the frontend. It is a fullstack Javascript app and fully functional&mdash;users can complete the entire shopping flow, from browse to checkout.
            <br /><br />
            The objective of this project was to hone our skills in schema design, RESTful routes, authentication, and deployment. <span style={{fontWeight: '600'}}>I also used it as a way to focus on design and UI.</span> I learned the tools ReactTransitionGroup and GSAP to add animation to the site. My learnings became the basis of my talk on UI & React.js, where I demoed how to add animation to React apps.
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
              <li>
                Users can login/sign up locally, or with Facebook and Google OAuth.
              </li>
              <li>
                Both unauthenticated guests and authenticated guests can complete the entire shopping flow:
                <ul>
                  <li>View products</li>
                  <li>Share products on social networks</li>
                  <li>Manage cart</li>
                  <li>Checkout</li>
                  <li>Receive email confirmation</li>
                </ul>
              </li>
              <li>
                Additionally, authenticated users can:
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
          <div className="about-heading-text">
            Typography<span className="divider" />
          </div>

          <br />

          <div className="font-tab">
            <span className="font-heading">Tenor Sans</span>
            <img className="font-img" src="./public/images/macbox-tenor.png" />
          </div>

          <br /><br /><br /><br /><br />

          <div className="about-heading-text">
            Colors<span className="divider" />
          </div>

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
            <div className="about-heading-text">
              The Stack<span className="divider" />
            </div>

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

        {/* src */}
        <div className="work-item-section content-padding max-width">
          <div className="next-btn macbox">
            <span>Next</span>
          </div>
        </div>
      </section>
    </div>
  )
}

