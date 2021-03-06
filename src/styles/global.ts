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

  h1, h2 {
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
      margin-bottom: 24px;

      @media(min-width: 1024px) {
          font-size: 48px;
          margin-bottom: 36px;
      }
  }

  h3 {
      font-size: 20px;
      margin-bottom: 18px;
      font-weight: 300;

      @media(min-width: 1024px) {
          font-size: 24px;
      }
  }

  p {
      margin-bottom: 16px;
      line-height: 24px;
  }

  a {
      color: inherit;
      text-decoration: none;
      transition: color 0.3s;

      & :hover {
          color: #FFD500;
      }
  }

  u {
      text-underline-position: under;
  }

  button {
      cursor: pointer;
  }
`
