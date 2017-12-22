import React from 'react'
import Link from 'gatsby-link'
import logo from './ennioslogo.svg'
import Navbar from '../components/Navbar'
import styled from 'styled-components'

const FooterArea = styled.footer`
  display: flex;
  justify-content: space-between;
  > nav {
    flex-direction: column;
  }
`;
const FooterTop = styled.div`
  @media (min-width: 768px) {
    align-items: center;

    img {
      width: 80%;
      display: block;
    }
  }
`;

class Footer extends React.Component {
  render() {
    return (
      <FooterArea>
        <FooterTop>
          <Link to={'/'} >
            <img src={logo} alt="Ennio's Integral Cleaning" width="100%"/>
          </Link>
          <br/>
          &copy; Ennio's Integral Cleaning.
          <address>
          13 Veritys<br/>
          Hatfield<br/>
          Hertfordshire<br/>
          AL10 8HH<br/>
          </address>
        </FooterTop>
        <Navbar/>
      </FooterArea>
    )
  }
}

export default Footer
