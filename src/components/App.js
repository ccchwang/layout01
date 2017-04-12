import React, {Component} from 'react';
import Header from './Header'
import About from './About'
import Work from './Work'
import Contact from './Contact'
import { Grid } from 'react-bootstrap'

export default class extends Component {

  render() {
    return (
      <Grid style={{width: '100%'}}>
        <Header />
        <About />
        <Work />
        <Contact />
      </Grid>
    )
  }

}
