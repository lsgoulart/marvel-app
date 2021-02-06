import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

  *,
  *:after,
  *:before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body, html {
    font-family: 'Bebas Neue', sans-serif;
    background: #ED1D24;
    color: white;
    font-smoothing: antialiased;
  }
  ul, ol {
    padding: 0;
    list-style: none;
  }
`
