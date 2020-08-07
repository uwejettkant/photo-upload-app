import React from 'react'
import GlobalStyles from './GlobalStyles'
import styled from 'styled-components/macro'
import Title from './comps/Title'

export default function App() {
  return (
    <>
      <GlobalStyles />
      <AppStyled>
        <Title />
      </AppStyled>
    </>
  )
}

const AppStyled = styled.section`
  max-width: 960px;
  margin: 0 auto;
`
