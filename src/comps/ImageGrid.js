import React from 'react'
import styled from 'styled-components/macro'
import useFirestore from '../hooks/useFirestore'
import { motion } from 'framer-motion'

export default function ImageGrid({ setSelectedImg }) {
  const { docs } = useFirestore('images')
  return (
    <ImageGridStyled>
      {docs.map((doc) => (
        <motion.div
          className="image-wrap"
          key={doc.id}
          layout
          whileHover={{ opacity: 1 }}
          onClick={() => setSelectedImg(doc.url)}
        >
          <motion.img
            src={doc.url}
            alt="user-upload"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.div>
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
