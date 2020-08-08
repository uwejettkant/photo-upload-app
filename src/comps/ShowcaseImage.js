import React from 'react'
import styled from 'styled-components/macro'
import { motion } from 'framer-motion'

export default function ShowcaseImage({ selectedImg, setSelectedImg }) {
  function handleClick(e) {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null)
    }
  }
  return (
    <BackdropStyled
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        className="backdrop-img"
        src={selectedImg}
        alt="#"
        initial={{ y: '-100vh' }}
        animate={{ y: '0' }}
      />
    </BackdropStyled>
  )
}

const BackdropStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  .backdrop-img {
    display: block;
    max-width: 60%;
    max-height: 80%;
    margin: 60px auto;
    box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
    border: 3px solid white;
  }
`
