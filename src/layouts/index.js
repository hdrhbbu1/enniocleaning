import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from "styled-components"
import '../global-styles.js'

import Navbar from '../components/Navbar'
import logo from './ennioslogo.svg'

const Wrapper = styled.section`
	background: black;
  font-family: sans-serif;
`;

const Container = styled.section`
  padding: 2em;
  max-width: 1200px;
  margin: 0 auto;
  color: white;
`;
const Main = styled.main`
  @media (min-width: 768px) {
    flex: 2;
  }
`;
const Aside = styled.aside`
  @media (min-width: 768px) {
    flex: 1;
  }
`;
const Header = styled.header`
	background-color: rgba(255,255,255,0.2);
`;
const HeaderContainer = Container.extend`
	padding: 0.2em;
	text-align: center;
	display: flex;
	flex-direction: column;
	padding: 1em;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
const Footer = Container.extend`

	@media (min-width: 768px) {
		display: flex;

		> * {
			flex: 1;
			margin: 15px;
		}
	}
`;

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
