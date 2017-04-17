import React, {Component} from 'react';
import Header from './Header'
import About from './About'
import Work from './Work'
import Contact from './Contact'
import Footer from './Footer'
import MainMenu from '../MainMenu'
import { Grid } from 'react-bootstrap'

export default class extends Component {

  render() {
    return (
      <Grid style={{width: '100%'}}>
        <MainMenu />
        <Header />
        <About />
        <Work />
        <Contact />
        <Footer />
      </Grid>
    )
  }

}
