import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { getComic } from '../../services'

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  color: #0f0d0f;
`

const Container = styled.main`
  width: 100%;
  padding: 24px;
  display: flex;
  flex-flow: row wrap;
  padding-top: 80px;

  img {
    margin-right: 32px;
  }

  p {
    margin-top: 16px;
    line-height: 1.4;
    max-width: 800px;
  }

  ul {
    margin-top: 16px;

    li {
      margin-top: 8px;
    }
  }
`

const ImageList = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 32px;

  img {
    max-width: 200px;
    border: 5px solid #0f0d0f;
  }
`

const ComicsDetails = ({ id }) => {
  const [comicDetails, setComicDetails] = useState(undefined)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setComicDetails(undefined)
      setLoading(true)

      const { data } = await getComic(id)

      setComicDetails(data?.data.results[0])
      setLoading(false)
    }

    fetchData()
  }, [id])

  console.log(loading, comicDetails)

  return (
    <Section>
      <Container>
        <img
          src={`${comicDetails?.thumbnail.path}.${comicDetails?.thumbnail.extension}`}
          title={comicDetails?.title}
          alt={comicDetails?.title}
        />
        <div>
          <h1>{comicDetails?.title}</h1>
          <p>{comicDetails?.description}</p>
          <ul>
            <li>
              <strong>Formato:</strong> {comicDetails?.format}
            </li>
            <li>
              <strong>Número de páginas:</strong> {comicDetails?.pageCount}
            </li>
            <li>
              <strong>Preço:</strong> ${comicDetails?.prices[0]?.price}
            </li>
          </ul>

          <ImageList>
            {comicDetails?.images.map((img) => (
              <img src={`${img.path}.${img.extension}`} alt={img.path} key={img.path} />
            ))}
          </ImageList>
        </div>
      </Container>
    </Section>
  )
}
export default ComicsDetails
