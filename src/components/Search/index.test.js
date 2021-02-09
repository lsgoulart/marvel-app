import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Search from './index'

describe('Test search component', () => {
  test('Should render search input', () => {
    render(<Search  />)
    const search = screen.getByTestId(`Search`)
    expect(search).toBeInTheDocument()
  })

  test('Should call onChange', () => {
    const mockOnChange = jest.fn()
    render(<Search onChange={mockOnChange} />)
    const input = screen.getByTestId(`Search__input`)
    userEvent.type(input, 'Comic')
    expect(input).toHaveValue('Comic')
    expect(mockOnChange).toHaveBeenCalled()
  })
})
