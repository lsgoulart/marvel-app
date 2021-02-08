import React, { useState } from 'react'
import styled from 'styled-components'
import { AnimatePresence } from 'framer-motion'

import useFetch from '../../hooks/useFetch'
import { getComics } from '../../services/index'
import Comic from '../../components/Comic'
import SelectedComics from '../../components/SelectedComics'

const Section = styled.section`
  margin-top: 60px;
`

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  padding: 0 24px;
  color: #0f0d0f;
  margin: 32px 0;

  h1 {
    margin-bottom: 16px;
  }
`

const Grid = styled.div`
  widht: 100%;
  margin: 0 auto;
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  margin-bottom: 100px;
`

const Loading = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`

const Comics = () => {
  const { response, loading } = useFetch(getComics)
  const [selectedComics, setSelectedComics] = useState([])

  const toggleSelected = (comic) => {
    setSelectedComics((comics) =>
      comics.includes(comic) ? comics.filter((i) => i !== comic) : [...comics, comic],
    )
  }

  return (
    <Section>
      <Header>
        <h1>Lista de quadrinhos</h1>
        <p>
          Veja abaixo a lista de quadrinhos disponíveis. Clique para selecioná-los e compartilhar
          com seus amigos.
        </p>
      </Header>

      {loading && (
        <Loading>
          <div>carregando...</div>
        </Loading>
      )}

      <Grid>
        <AnimatePresence transition={{ staggerChildren: 0.5 }}>
          {response?.data.results.map((item) => (
            <Comic
              item={item}
              isSelected={selectedComics.includes(item)}
              setSelected={(comic) => toggleSelected(comic)}
            />
          ))}
        </AnimatePresence>
      </Grid>

      <SelectedComics items={selectedComics} />
    </Section>
  )
}

export default Comics
