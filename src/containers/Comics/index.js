import React from 'react'
import styled from 'styled-components'

import useFetch from '../../hooks/useFetch'
import { getComics } from '../../services/index'

const Grid = styled.div`
  widht: 100%;
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
`
const Item = styled.div`
  display: flex;
  flex-flow: row wrap;
  border-radius: 3px;
  overflow: hidden;

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
`

const Comics = () => {
  const { response, loading } = useFetch(getComics)

  console.log(response)

  return (
    <section>
      <h1>Comics</h1>

      {loading && <div>carregando...</div>}

      <Grid>
        {response?.data.results.map((item) => (
          <Item>
            <img
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              title={item.title}
              alt={item.title}
            />
          </Item>
        ))}
      </Grid>
    </section>
  )
}

export default Comics
