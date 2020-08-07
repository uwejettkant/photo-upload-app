import React from 'react'
import GlobalStyles from './GlobalStyles'
import styled from 'styled-components/macro'
import Title from './comps/Title'
import UploadForm from './comps/UploadForm'
import ImageGrid from './comps/ImageGrid'

export default function App() {
  return (
    <>
      <GlobalStyles />
      <AppStyled>
        <Title />
        <UploadForm />
        <ImageGrid />
      </AppStyled>
    </>
  )
}

const AppStyled = styled.section`
  max-width: 960px;
  margin: 0 auto;
`
