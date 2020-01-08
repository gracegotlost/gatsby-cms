import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.div`
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  background: rgb(244, 245, 247);
  padding: 16px;
`
class MenuBar extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Wrapper>
        {data.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
                <Link
                  style={{ boxShadow: `none` }}
                  to={`blog${node.fields.slug}`}
                >
                  {title}
                </Link>
            </div>
          )
        })}
      </Wrapper>
    )
  }
}

export default MenuBar
