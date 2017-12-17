import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"
import '../global-styles.js'

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  font-family: SakerSansBold, sans-serif;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const NavFooter = styled.div`
  display: flex;
  flex-direction: column;
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

  &:hover,
  &:active,
  &:focus {
    background-color: gray;
  }
	&.active {
		background-color: #daaf09;
	}

  &:last-child {
    background-color: #BF0B12;
    color: black;

    &:hover,
    &:active,
    &:focus {
      background-color: #ad1b21;
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
  		</Nav>
    )
  }
}
export default Navbar
