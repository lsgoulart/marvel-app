import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Comic from './index'

describe('Test comic card', () => {
  const comicMock = {
    thumbnail: {
      path: 'path/to/thumbnail',
      extension: 'jpg'
    },
    title: 'Comic title'
  }

  test('Should render a comic card', () => {
    render(<Comic item={comicMock} setSelected={() => {}} />)
    const card = screen.getByTestId(`ComicCard`)
    expect(card).toBeInTheDocument()
  })

  test('Should render a selected comic card', () => {
    render(<Comic item={comicMock} setSelected={() => {}} isSelected />)
    const card = screen.getByTestId(`ComicCard`)

    expect(card).toHaveStyle(`border: 8px solid #ED1D24`)
  })

  test('Should render a card title', () => {
    render(<Comic item={comicMock} setSelected={() => {}} />)
    const title = screen.getByText(comicMock.title)
    expect(title).toBeInTheDocument()
  })

  test('Card infos should be hidden', () => {
    render(<Comic item={comicMock} setSelected={() => {}} />)
    const infos = screen.getByTestId(`ComicCard__infos`)
    expect(infos).not.toBeVisible()
  })
})
