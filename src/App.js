import React from 'react'
import GlobalStyles from './GlobalStyles'
import styled from 'styled-components/macro'
import Title from './comps/Title'
import UploadForm from './comps/UploadForm'

export default function App() {
  return (
    <>
      <GlobalStyles />
      <AppStyled>
        <Title />
        <UploadForm />
      </AppStyled>
    </>
  )
}

const AppStyled = styled.section`
  max-width: 960px;
  margin: 0 auto;
`
