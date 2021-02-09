import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import SelectedComics from './index'

describe('Test selectedComics component', () => {
  const items = [
    {
      title: 'Title',
      description: 'description',
      thumbnail: {
        path: 'path/to/file',
        extension: 'jpg'
      }
    },
    {
      title: 'Title 2',
      description: 'description 2',
      thumbnail: {
        path: 'path/to/file',
        extension: 'jpg'
      }
    }
  ]

  test('Should render SelectedComics component', () => {
    render(<SelectedComics items={items} />)
    const selected = screen.getByTestId(`SelectedComics`)
    expect(selected).toBeInTheDocument()
  })

  test('Should display selected comics counter', () => {
    render(<SelectedComics items={items} />)
    
    const text = screen.getByText((content, node) => {
      const hasText = (node) => node.textContent === "Voce selecionou 2 quadrinhos";
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      );
  
      return nodeHasText && childrenDontHaveText;
    })
    expect(text).toBeInTheDocument()
  })

})
