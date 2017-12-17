import React from 'react'
import Link from 'gatsby-link'

class Navbar extends React.Component {
  render() {
    return (
      <div>
  			<Link activeClassName="active" to={`/`}>
  				Home
  			</Link>
  			<Link activeClassName="active" to={`/about/`}>
  				About
  			</Link>
  			<Link activeClassName="active" to={`/services/`}>
  				Services
  			</Link>
  			<Link activeClassName="active" to={`/contact/`}>
  				Contact
  			</Link>
  		</div>
    )
  }
}
export default Navbar
