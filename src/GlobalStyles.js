import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
:root {
    --primary: #efb6b2;
    --secondary: #4e4e4e;
    --error: #ff4a4a;
  }
  
  body {
    font-family: "Noto Serif";
    color: var(--secondary);
    `
