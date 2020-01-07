import React from "react"
import { Link } from "gatsby"

import Layout from "./blocks/layout"
import SEO from "./blocks/seo"
import { Button } from "../components/index"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Constellation Design System"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`design system`]}
        />
        <img style={{ margin: 0 }} src="./Foundation.png" alt="Cover" />
        <p>
          A design system removes ambiguity and drives consistency by helping designers 
          and products teams make the right decisions at the right time. It provides 
          guidance and a single source of truth for how we express our brand, our core 
          values and our aesthetic through experiences we design. It is a comprehensive 
          and efficient tool that allows us to build quality products at scale. 
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Design Spec</Button>
        </Link>
        <Link to="/docs/">
          <Button marginTop="35px">Go to API Doc</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
