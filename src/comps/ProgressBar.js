import React, { useEffect } from 'react'
import styled from 'styled-components/macro'
import useStorage from '../hooks/useStorage'
import { motion } from 'framer-motion'

export default function ProgressBar({ file, setFile }) {
  const { url, progress } = useStorage(file)

  useEffect(() => {
    if (url) {
      setFile(null)
    }
  }, [url, setFile])
  return (
    <ProgressBarStyled
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    >
      progress
    </ProgressBarStyled>
  )
}

const ProgressBarStyled = styled(motion.div)`
  height: 5px;
  background: var(--primary);
  margin-top: 20px;
`
