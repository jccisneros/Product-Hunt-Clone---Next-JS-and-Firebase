import { Global, css } from '@emotion/react'

export const globalStyles = (

  <Global 
    styles={ css`
      :root {
        --gray: #3d3d3d;
        --gray-dark: #313131;
        --gray-light: #6f6f6f;
        --orange: #ff5722;
        --orange-dark: #b23c17;
        --orange-light: #ff784e;
      }
      html {
        font-size: 62.5%;
        box-sizing: border-box;
      }
      *, *:before, *:after {
        box-sizing: inherit;
      }
      body {
        font-size: 1,6rem;
        line-height: 1.5;
        font-family: 'PT Sans', sans-serif;              
      }
      h1, h2, h3 {
        margin: 0, 0, 2rem, 0;
        line-height: 1.5;        
      }
      h1, h2 {
        font-family: 'Roboto Slab', serif;
        font-weight: 700;
        font-size: 3rem !important;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      a {
        text-decoration: none;
      }
    `}
  />
)

export { HeaderStyle, ContenedorHeader, Logo } from './Header'
export { Buton } from './Button'
export { InputText, ButtonSearch } from './Search'
export { Nav } from './Nav'
export { Form, Field, InputSubmit } from './Form'