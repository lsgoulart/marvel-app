import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ReactPaginate from 'react-paginate'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 160px;

  ul {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    min-width: 20px;

    li {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: center;
      margin: 0 6px;

      a {
        padding: 10px;
        border-radius: 3px;
        color: #0f0d0f;
        transition: all 200ms ease;
        cursor: pointer;
        min-width: 40px;
        height: 40px;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;

        :hover {
          background: rgba(0, 0, 0, 0.2);
        }
      }

      &.selected a {
        background: #ed1d24;
        color: white;
      }
    }
  }
`

const Pagination = ({ totalPages, onChange }) => (
  <Wrapper>
    <ReactPaginate
      pageCount={totalPages}
      pageRangeDisplayed={5}
      onPageChange={onChange}
      nextLabel="Próximo"
      previousLabel="Anterior"
    />
  </Wrapper>
)

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Pagination
