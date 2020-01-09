import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../blocks/layout"

function Wrapper({ children }) {
  const { site, allMdx } = useStaticQuery(
    graphql`
      query MenuQuery {
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
      }
    `
  )

  const menubar = allMdx.edges
  const siteTitle = site.siteMetadata.title

  return (
    <Layout data={menubar} title={siteTitle}>
      {children}
    </Layout>
  )
}

export default Wrapper