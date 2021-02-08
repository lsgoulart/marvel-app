import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 300px;
  width: 40%;

  input {
    width: 100%;
    padding: 10px;
    background: rgba(255, 255, 255, 0.8);
    border: 2px solid #0f0d0f;
    border-radius: 3px;
    transition: all 200ms ease;

    :focus {
      border-color: #ed1d24;
    }
  }
`

const Search = ({ onChange }) => {
  const [value, setValue] = useState()
  useEffect(() => {
    onChange(value)
  }, [value, onChange])

  return (
    <Wrapper>
      <input
        type="search"
        name="search"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Busque pelo título do quadrinho"
      />
    </Wrapper>
  )
}

export default Search
