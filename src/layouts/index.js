import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import '../global-styles.js'

import Header from '../components/Header'
import Footer from '../components/Footer'


const Wrapper = styled.section`
  font-family: sans-serif;
`;

const Container = styled.section`
  padding: 2em;
  max-width: 968px;
  margin: 0 auto;
  background-color: white;
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

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    return (
      <Wrapper>
        <Container>
          <Header/>
            {children()}
					<Footer/>
        </Container>
      </Wrapper>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
