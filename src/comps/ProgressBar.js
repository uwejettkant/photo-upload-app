import React, { useEffect } from 'react'
import styled from 'styled-components/macro'
import useStorage from '../hooks/useStorage'

export default function ProgressBar({ file, setFile }) {
  const { url, progress } = useStorage(file)

  useEffect(() => {
    if (url) {
      setFile(null)
    }
  }, [url, setFile])
  return (
    <ProgressBarStyled style={{ width: progress + '%' }}>
      progress
    </ProgressBarStyled>
  )
}

const ProgressBarStyled = styled.div`
  height: 5px;
  background: var(--primary);
  margin-top: 20px;
`
