import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import mainimg from './main-banner.jpg'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    let title
    if (post.frontmatter.title == 'Home') {
    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <img src={mainimg} alt="Man looking out of a bright, clear window in the sunshine"  width="100%"/>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr/>
      </div>
    )
    }
    else {
      return (
        <div>
          <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr />
        </div>
      )
    }
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
