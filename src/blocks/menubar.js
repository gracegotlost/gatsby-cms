import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.div`
  min-height: calc(100vh - 80px);
  position: fixed;
  top: 80px;
  left: 0;
  width: 250px;
  border-right: 1px solid #CED4DE;
  padding: 16px;
`

const TextContainer = styled.div`
  padding: 8px;
`;

class MenuBar extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Wrapper>
        {data.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
                {title}
                <TextContainer>
                  <Link
                    style={{ boxShadow: `none` }}
                    to={`blog${node.fields.slug}`}
                  >
                    design spec
                  </Link>
                </TextContainer>
                <TextContainer>
                  <Link
                    style={{ boxShadow: `none` }}
                    to={`/src-components-${node.frontmatter.title.toLowerCase()}-${node.frontmatter.title.toLowerCase()}`}
                  >
                    dev API
                  </Link>
                </TextContainer>
            </div>
          )
        })}
      </Wrapper>
    )
  }
}

export default MenuBar
