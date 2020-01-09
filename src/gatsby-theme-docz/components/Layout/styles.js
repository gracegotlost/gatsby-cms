import { media } from '~theme/breakpoints'

export const main = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
}

export const wrapper = {
  py: 0,
  flex: 1,
  minHeight: '100vh',
  [media.tablet]: {
    display: 'block',
  },
}

export const content = {
  backgroundColor: 'background',
  py: 5,
  px: 4,
  variant: 'styles.Container',
  [media.tablet]: {
    py: 4,
    px: 4,
    pt: 5,
  },
}