import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function UploadForm() {
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)

  const types = ['image/png', 'image/jpeg']

  function handleChange(e) {
    const selected = e.target.files[0]
    if (selected && types.includes(selected.type)) {
      setFile(selected)
      setError('')
    } else {
      setFile(null)
      setError('Please select an image file (png or jpeg)')
    }
  }

  return (
    <FormStyled>
      <input type="file" onChange={handleChange} />
      {error && <div className="error">{error}</div>}
      {file && <div>{file.name}</div>}
    </FormStyled>
  )
}

const FormStyled = styled.form`
  color: #000;
`
