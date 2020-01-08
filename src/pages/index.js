import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../blocks/layout"
import SEO from "../blocks/seo"
import MenuBar from "../blocks/menubar"
import { Button } from "../components/index"

class IndexPage extends React.Component {
  render() {
    const { location, data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const menubar = data.allMdx.edges

    return (
      <Layout location={location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`design system`]}
        />
        <MenuBar data={menubar} />
        <img style={{ margin: 0 }} src="./Foundation.png" alt="Cover" />
        <p>
          A design system removes ambiguity and drives consistency by helping designers 
          and products teams make the right decisions at the right time. It provides 
          guidance and a single source of truth for how we express our brand, our core 
          values and our aesthetic through experiences we design. It is a comprehensive 
          and efficient tool that allows us to build quality products at scale. 
        </p>
        <Link to="/">
          <Button marginTop="35px">Download Sketch Assets</Button>
        </Link>
        <Link to="/docs/">
          <Button marginTop="35px">Go to API Doc</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
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
  }
`