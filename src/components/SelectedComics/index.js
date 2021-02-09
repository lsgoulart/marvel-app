import React, { useState, useMemo } from 'react'
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
`

const EmailShare = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin-left: 8px;
  background: rgba(0, 0, 0, 0.3);
  padding-left: 10px;
  border-radius: 3px;

  input {
    width: 230px;
    background: transparent;
    color: white;
    margin-right: auto;
    border: 0;
    outline: 0;

    ::placeholder {
      color: rgba(255, 255, 255, 0.8);
    }
  }

  && svg {
    width: 20px;
    height: 20px;
    fill: #fff;
  }
`

const ShareLink = styled.a`
  color: white;
  text-decoration: none;
  margin-left: 8px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.2);
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
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
`

const SelectedComics = ({ items }) => {
  const [email, setEmail] = useState()

  const emailTemplate = useMemo(
    () =>
      items.reduce(
        (acc, curr) => `
        ${acc}

        --------------------------------

        ${curr.title}

        ${curr.description?.length > 0 ? curr.description : ''}

        <img src="${curr.thumbnail.path}.${curr.thumbnail.extension}" />
      `,
        ``,
      ),
    [items],
  )

  return (
    <AnimatePresence>
      {items.length > 0 && (
        <SelectedWrapper
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', bounce: 0.1 }}
          data-testid="SelectedComics"
        >
          <Container>
            <p>
              Voce selecionou <strong>{items.length}</strong> quadrinhos
            </p>

            <Share>
              <span>Compartilhar:</span>

              <EmailShare>
                <input
                  type="email"
                  placeholder="Digite o e-mail"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <ShareLink
                  href={`mailto:${email}?Subject=${encodeURIComponent(
                    'Marvel Comics',
                  )}&body=${encodeURIComponent(emailTemplate)}`}
                  disabled={email?.length < 5}
                >
                  <EmailIcon />
                </ShareLink>
              </EmailShare>
            </Share>
          </Container>
        </SelectedWrapper>
      )}
    </AnimatePresence>
  )
}

SelectedComics.propTypes = {
  items: PropTypes.instanceOf(Array),
}

SelectedComics.defaultProps = {
  items: [],
}

export default SelectedComics
