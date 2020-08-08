import React, { useState } from 'react'
import GlobalStyles from './GlobalStyles'
import styled from 'styled-components/macro'
import Title from './comps/Title'
import UploadForm from './comps/UploadForm'
import ImageGrid from './comps/ImageGrid'
import ShowcaseImage from './comps/ShowcaseImage'

export default function App() {
  const [selectedImg, setSelectedImg] = useState(null)
  return (
    <>
      <GlobalStyles />
      <AppStyled>
        <Title />
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <ShowcaseImage
            selectedImg={selectedImg}
            setSelectedImg={setSelectedImg}
          />
        )}
      </AppStyled>
    </>
  )
}

const AppStyled = styled.section`
  max-width: 960px;
  margin: 0 auto;
`
