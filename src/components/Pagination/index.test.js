import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Pagination from './index'

describe('Test selectedComics component', () => {

  test('Should render Pagination component', () => {
    render(<Pagination totalPages={2} onChange={() => {}} />)
    const pagination = screen.getByTestId(`Pagination`)
    expect(pagination).toBeInTheDocument()
  })
})
