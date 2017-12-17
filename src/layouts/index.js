import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from "styled-components"

import Navbar from '../components/Navbar'
import logo from './ennioslogo.svg'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header
    if (location.pathname === '/') {
      header = (
        <div>
          <h1>
            <Link to={'/'} >
              <img src={logo} alt="Ennio's Integral Cleaning" />
            </Link>
          </h1>
          <Navbar/>
        </div>
      )
    } else {
      header = (
        <div>
          <h3>
            <Link to={'/'}>
              <img src={logo} alt="Ennio's Integral Cleaning" />
            </Link>
          </h3>
          <Navbar/>
        </div>
      )
    }
    return (
      <div>
        {header}
        {children()}
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
