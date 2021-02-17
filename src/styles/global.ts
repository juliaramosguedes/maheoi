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
      font: 300 72px Raleway, sans-serif;
      text-transform: uppercase;
  }

  h2 {
      font-size: 48px;
  }

  h3 {
      font-size: 41px;
  }

  a {
      color: inherit;
      text-decoration: none;
  }

  u {
      text-underline-position: under;
  }
`
