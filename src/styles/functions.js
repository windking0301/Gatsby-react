import { css, injectGlobal } from 'styled-components'

export const sizes = {
  xl: 2300,
  giant: 1440,
  desktop: 950,
  tablet: 768,
  phone: 600,
}

export const above = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})
export const below = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})