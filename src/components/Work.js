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

        {/*** OMNI ***/}
        <div className="work-item closed" id="omni">

          {/* OMNI - header image */}
          <div className="work-item-header">
            <div className="header-image img-responsive" style={{backgroundImage: "url('/public/images/3.png')"}} />


            <div className="x-btn">
              <p>X</p>
              <div className="top" />
              <div className="right" />
              <div className="bottom" />
              <div className="left" />
            </div>



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
                <p style={{marginTop: '-5px'}} className="header-subtitle">NERD Stack, A-frame, Victory</p>
              </div>
            </div>
          </div>

          {/* OMNI - content */}
          <div className="work-item-content">

            <p className="about-heading-text">About</p>
            <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et lorem posuere, pellentesque ex sit amet, bibendum nibh. Fusce sed massa orci. Etiam hendrerit pretium nisl, vitae accumsan massa cursus aliquet. Sed lobortis id mi vitae gravida. Praesent ut porttitor eros, vitae eleifend velit. Suspendisse quis elit quis nunc convallis sagittis..</p>

            <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et lorem posuere, pellentesque ex sit amet, bibendum nibh. Fusce sed massa orci. Etiam hendrerit pretium nisl, vitae accumsan massa cursus aliquet. Sed lobortis id mi vitae gravida. Praesent ut porttitor eros, vitae eleifend velit.</p>
            <p className="about-heading-text">About</p>
            <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et lorem posuere, pellentesque ex sit amet, bibendum nibh. Fusce sed massa orci. Etiam hendrerit pretium nisl, vitae accumsan massa cursus aliquet. Sed lobortis id mi vitae gravida. Praesent ut porttitor eros, vitae eleifend velit. Suspendisse quis elit quis nunc convallis sagittis..</p>
            <p className="about-heading-text">The Stack</p>
            <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et lorem posuere, pellentesque ex sit amet, bibendum nibh. Fusce sed massa orci. Etiam hendrerit pretium nisl, vitae accumsan massa cursus aliquet. Sed lobortis id mi vitae gravida. Praesent ut porttitor eros, vitae eleifend velit.</p>
            <div className="next-btn"><span>Next</span></div>
          </div>


        </div>

        {/*** RDI ***/}
        <div className="work-item closed" id="rdi">

          {/* OMNI - header image */}
          <div className="work-item-header">
            <div className="header-image img-responsive" style={{backgroundImage: "url('/public/images/rdi.jpg')"}} />

            <div className="x-btn">
              <p>X</p>
              <div className="top" />
              <div className="right" />
              <div className="bottom" />
              <div className="left" />
            </div>

            <div className="header-text-wrapper">
              <h1 className="header-title">react-dynamic-UI</h1>
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

