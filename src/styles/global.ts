import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
  }

  body {
      background-color: ${(props) => props.theme.colors.background};
      color: ${(props) => props.theme.colors.text};
      font: 300 16px Verdana, sans-serif;
  }

  h1, h2, h3 {
      font-weight: 300;
      font-family: Raleway, sans-serif;
      text-transform: uppercase;
  }

  h1 {
      font-size: 54px;

      @media(min-width: 1024px) {
          font-size: 72px;
      }
  }

  h2 {
      font-size: 36px;

      @media(min-width: 1024px) {
          font-size: 48px;
      }
  }

  h3 {
      font-size: 31px;

      @media(min-width: 1024px) {
          font-size: 41px;
      }
  }

  a {
      color: inherit;
      text-decoration: none;
  }

  u {
      text-underline-position: under;
  }
`
