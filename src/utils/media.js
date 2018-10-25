import { css } from 'styled-components';

export const media = {
  flex: (...args) => css`
    ${css(...args)}
  `,
  xs: (...args) => css`
    @media (min-width: 0) and (max-width: 599px) {
      ${css(...args)}
    }
  `,
  sm: (...args) => css`
    @media (min-width: 600px) and (max-width: 959px) {
      ${css(...args)}
    }
  `,
  md: (...args) => css`
    @media (min-width: 960px) and (max-width: 1280px) {
      ${css(...args)}
    }
  `,
  lg: (...args) => css`
    @media only screen and (min-width: 1280px) {
      ${css(...args)}
    }
  `
};

export const fluid = {
  xs: (...args) => css`
    ${css(...args)}
  `,
  greaterXS: (...args) => css`
    @media (min-width: 34em) {
      ${css(...args)}
    }
  `,
  greaterSM: (...args) => css`
    @media (min-width: 48em) {
      ${css(...args)}
    }
  `,
  greaterMD: (...args) => css`
    @media (min-width: 62em) {
      ${css(...args)}
    }
  `,
  greaterLG: (...args) => css`
    @media (min-width: 75em) {
      ${css(...args)}
    }
  `
};

export const genWidth = (prop, divisions, gutter) => `calc(${(prop / divisions) * 100}% - ${gutter * 2}px)`;
