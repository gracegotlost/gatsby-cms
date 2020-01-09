/** @jsx jsx */
import { jsx, Layout as BaseLayout, Main, Container } from 'theme-ui'
import { Global } from '@emotion/core'

import global from '~theme/global'
import * as styles from './styles'

export const Layout = ({ children }) => {
  return (
    <BaseLayout sx={{ '& > div': { flex: '1 1 auto' } }} data-testid="layout">
      <Global styles={global} />
      <Main sx={styles.main}>
        <Container sx={styles.content} data-testid="main-container">
          {children}
        </Container>
      </Main>
    </BaseLayout>
  )
}