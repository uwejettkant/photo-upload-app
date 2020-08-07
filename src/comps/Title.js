import React from 'react'
import styled from 'styled-components/macro'

export default function Title() {
  return (
    <TitleStyled>
      <h1 className="title">FireGram</h1>
      <h2 className="headline">Your Pictures</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </TitleStyled>
  )
}

const TitleStyled = styled.div`
  .title {
    color: var(--primary);
    font-size: 1.2rem;
    letter-spacing: 2px;
    font-weight: normal;
  }
  .headline,
  p {
    text-align: center;
  }
  .headline {
    margin-top: 60px;
    font-size: 2.6rem;
  }
`
