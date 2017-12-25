import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import '../global-styles.js'
import Header from '../components/Header'
import Footer from '../components/Footer'

import sponge from './sponge.svg'

const SpongeContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

const Wrapper = styled.div`
  font-family: sans-serif;
  position: relative;
`;
const Container = styled.section`
  padding: 2em;
  max-width: 720px;
  margin: 0 auto;
  background-color: white;
`;
const Main = styled.main`
  @media (min-width: 768px) {
    flex: 2;
  }
`;

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    return (
      <Wrapper>
        <SpongeContainer>
         <img src={sponge} alt="a sponge" width="140px"/>
        </SpongeContainer>
        <Container>
          <Header/>
            <Main>
              {children()}
            </Main>
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
