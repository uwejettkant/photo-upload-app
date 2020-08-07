import React, { useState } from 'react'
import styled from 'styled-components/macro'
import ProgressBar from './ProgressBar'

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
    <>
      <FormStyled>
        <label>
          <input type="file" onChange={handleChange} />
          <span>+</span>
        </label>
        <OutputStyled>
          {error && <div className="error">{error}</div>}
          {file && <div>{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </OutputStyled>
      </FormStyled>
    </>
  )
}

const FormStyled = styled.form`
  margin: 30px auto 10px;
  text-align: center;

  label input {
    height: 0;
    width: 0;
    opacity: 0;
  }

  label {
    display: block;
    width: 30px;
    height: 30px;
    border: 1px solid var(--primary);
    border-radius: 50%;
    margin: 10px auto;
    line-height: 30px;
    color: var(--primary);
    font-weight: bold;
    font-size: 24px;
  }

  label:hover {
    background: var(--primary);
    color: white;
  }
`

const OutputStyled = styled.div`
  height: 60px;
  font-size: 0.8rem;

  .error {
    color: var(--error);
  }
`
