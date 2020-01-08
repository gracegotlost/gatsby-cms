import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../blocks/layout"
import SEO from "../blocks/seo"
import MenuBar from "../blocks/menubar"
import { Button } from "../components/index"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const menubar = this.props.data.allMdx.edges
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <MenuBar data={menubar} />
        <h1>{post.frontmatter.title}</h1>
        <Link to={`/src-components-${post.frontmatter.title.toLowerCase()}-${post.frontmatter.title.toLowerCase()}`}>
          <Button marginTop="35px" marginBottom="35px">Go to API Doc</Button>
        </Link>
        <MDXRenderer>{post.body}</MDXRenderer>

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`blog${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`blog${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMdx(filter: {fields: {slug: {regex: "/content/"}}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
