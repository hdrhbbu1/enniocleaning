import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"
import '../global-styles.js'
import './style.scss'

const SensibleFont = styled.span`
  font-family: sans-serif;
`;
const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: SakerSansBold, sans-serif;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
  }
`;
const StyledLink = styled(Link)`
  padding: 15px;
  text-align: center;
  text-decoration: none;
  border-radius: 15px;
  color: black;
  transition: all 0.25s ease-in-out;
  font-family: 'SakerSansBold', sans-serif;
  font-size: 22px;
  letter-spacing: 1.3px;

  &:hover,
  &:active,
  &:focus {
    background-color: gray;
  }
	&.active {
		background-color: #3E1B3C;
    color: white;
	}

  &:last-child {
    background-color: #69F4BD;
    color: black;

    &:hover,
    &:active,
    &:focus {
      background-color: #319589;
    }
  }
`;

class Navbar extends React.Component {
  render() {
    return (
      <Nav>
  			<StyledLink activeClassName="active" to={`/`}>
  				Home
  			</StyledLink>
  			<StyledLink activeClassName="active" to={`/about/`}>
  				About
  			</StyledLink>
  			<StyledLink activeClassName="active" to={`/services/`}>
  				Services
  			</StyledLink>
  			<StyledLink activeClassName="active" to={`/contact/`}>
  				Contact
  			</StyledLink>
        <a className="StyledLink" href="mailto:ennio@integralcleaning.co.uk">
          Email me
        </a>
        <a className="StyledLink" href="tel:07478219348">
          Call now! <SensibleFont>07478 219348</SensibleFont>
        </a>
  		</Nav>
    )
  }
}
export default Navbar
