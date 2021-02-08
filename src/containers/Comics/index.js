import React, { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { AnimatePresence } from 'framer-motion'

import { getComics } from '../../services/index'
import { Comic, SelectedComics, Pagination } from '../../components'

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
  margin-bottom: 60px;
`

const Loading = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  color: #0f0d0f;
`

const ITEMS_PER_PAGE = 20

const Comics = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)
  const [comicsList, setComicsList] = useState(undefined)
  const [selectedComics, setSelectedComics] = useState([])

  const toggleSelected = (comic) => {
    setSelectedComics((comics) =>
      comics.includes(comic) ? comics.filter((i) => i !== comic) : [...comics, comic],
    )
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setComicsList(undefined)

      const { data } = await getComics({ offset: currentPage * ITEMS_PER_PAGE })

      setComicsList(data)
      setTotalPages(data.data.total / ITEMS_PER_PAGE)
      setLoading(false)
    }

    fetchData()
  }, [currentPage])

  const onPageChange = useCallback((page) => {
    const { selected } = page
    setCurrentPage(selected)
  }, [])

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
          {comicsList?.data.results.map((item) => (
            <Comic
              item={item}
              isSelected={selectedComics.includes(item)}
              setSelected={(comic) => toggleSelected(comic)}
              key={item.id}
            />
          ))}
        </AnimatePresence>
      </Grid>

      <Pagination totalPages={totalPages} currentPage={1} onChange={onPageChange} />

      <SelectedComics items={selectedComics} />
    </Section>
  )
}

export default Comics
