import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"
import MenuBar from './menubar';

class Layout extends React.Component {
  render() {
    const { title, data, children } = this.props

    return (
      <Wrapper>
        <Header>
          <h3
            style={{
              marginBottom: rhythm(1.5),
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h3>
        </Header>
        {data && <MenuBar data={data} /> }
        <Main>{children}</Main>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <span role="img" aria-label="love emoji">
            ❤️
          </span>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`
const Header = styled.header`
  width: 100%;  
  height: 80px;
  padding: 24px 32px;
  background: #F5F6F7;
  border-bottom: 1px solid #CED4DE;
  position: fixed;
  top: 0;
  z-index: 1;
`
const Main = styled.main`
  margin: 0 auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(4)} ${rhythm(1.5)} ${rhythm(3 / 4)};
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
