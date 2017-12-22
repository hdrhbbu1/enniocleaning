import React from 'react'
import Link from 'gatsby-link'
import logo from './ennioslogo.svg'
import Navbar from '../components/Navbar'
import styled from 'styled-components'

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

class Header extends React.Component {
  render() {
    return (
      <div>
        <Link to={'/'} >
          <img src={logo} alt="Ennio's Integral Cleaning" />
        </Link>
        <hr/>
        <Navbar/>
      </div>
    )
  }
}

export default Header
