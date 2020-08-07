import React from 'react'
import styled from 'styled-components/macro'
import useFirestore from '../hooks/useFirestore'

export default function ImageGrid() {
  const { docs } = useFirestore('images')
  return (
    <ImageGridStyled>
      {docs.map((doc) => (
        <div className="image-wrap" key={doc.id}>
          <img src={doc.url} alt="user-upload" />
        </div>
      ))}
    </ImageGridStyled>
  )
}

const ImageGridStyled = styled.div`
  margin: 20px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;

  .image-wrap {
    overflow: hidden;
    height: 0;
    padding: 50% 0;
    position: relative;
    opacity: 0.8;
  }
  .image-wrap img {
    min-width: 100%;
    min-height: 100%;
    max-width: 150%;
    position: absolute;
    top: 0;
    left: 0;
  }
`
