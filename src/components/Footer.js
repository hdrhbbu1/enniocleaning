import React from 'react'
import Link from 'gatsby-link'
import logo from './ennioslogo.svg'
import Navbar from '../components/Navbar'

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <Link to={'/'} >
          <img src={logo} alt="Ennio's Integral Cleaning" />
        </Link>
        <Navbar/>
      </div>
    )
  }
}

export default Footer
