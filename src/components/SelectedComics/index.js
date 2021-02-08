import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

import { ReactComponent as EmailIcon } from '../../assets/email.svg'

const SelectedWrapper = styled(motion.div)`
  width: 100%;
  padding: 24px;
  background: #ed1d24;
  color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 4;
  font-size: 14px;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`

const Share = styled.div`
  margin-left: auto;
  display: flex;
  flex-flow: row wrap;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    margin-left: 8px;
    padding: 10px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    display: flex;
    flex-flow: row wrap;
    transition: all 200ms ease;

    svg {
      width: 20px;
      height: 20px;
      fill: #fff;
    }

    :hover {
      background: rgba(0, 0, 0, 0.4);
    }
  }
`

const SelectedComics = ({ items }) => (
  <AnimatePresence>
    {items.length > 0 && (
      <SelectedWrapper
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', bounce: 0.1 }}
      >
        <Container>
          <p>
            Voce selecionou <strong>{items.length}</strong> quadrinhos
          </p>

          <Share>
            <span>Compartilhar:</span>

            <a href="#" alt="Enviar por e-mail" title="Enviar por e-mail">
              <EmailIcon />
            </a>
          </Share>
        </Container>
      </SelectedWrapper>
    )}
  </AnimatePresence>
)

SelectedComics.propTypes = {
  items: PropTypes.instanceOf(Array),
}

SelectedComics.defaultProps = {
  items: [],
}

export default SelectedComics
