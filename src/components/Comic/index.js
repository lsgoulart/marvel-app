import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from '@reach/router'

const Item = styled(motion.div)`
  display: flex;
  flex-flow: row wrap;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border: 8px solid ${({ isSelected }) => (isSelected ? '#ED1D24' : '#0f0d0f')};
  transition: all 200ms ease;

  img {
    width: 100%;
    height: 27.4vw;
    object-fit: cover;
  }
`

const Infos = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  background: rgba(0, 0, 0, 0.7);
  flex-flow: row wrap;
  align-items: flex-end;
  justify-content: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  padding: 24px;
  z-index: 1;
  overflow: hidden;

  h1 {
    width: 100%;
    font-size: 18px;
    margin-bottom: 10px;
  }

  a {
    font-size: 14px;
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    text-decoration: none;
    padding: 10px;
    display: flex;
    flex-flow: row wrap;

    :hover {
      transition: all 200ms ease;
      background: rgba(255, 255, 255, 0.3);
    }
  }

  div {
    display: flex;
    flex-flow: row wrap;
  }
`

const Comic = ({ item, isSelected, setSelected }) => {
  const [isHovering, setIsHovering] = useState(false)

  const toggleSelect = () => {
    setSelected(item)
  }

  return (
    <Item
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      onTap={toggleSelect}
      isSelected={isSelected}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { staggerChildren: 0.4 } }}
      exit={{ opacity: 0, y: -10 }}
    >
      <Infos initial={{ opacity: 0 }} animate={{ opacity: isHovering ? 1 : 0 }}>
        <motion.div animate={{ y: isHovering ? 0 : 50, opacity: isHovering ? 1 : 0 }}>
          <motion.h1>{item.title}</motion.h1>

          <Link to={`quadrinho/${item.id}`}>Ver detalhes</Link>
        </motion.div>
      </Infos>
      <motion.img
        src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
        title={item.title}
        alt={item.title}
        animate={{
          filter: isHovering ? 'grayscale(1)' : 'grayscale(0)',
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{ type: 'spring', bounce: 0.1 }}
      />
    </Item>
  )
}

Comic.propTypes = {
  item: PropTypes.shape({
    thumbnail: PropTypes.shape({
      path: PropTypes.string,
      extension: PropTypes.string,
    }),
    title: PropTypes.string.isRequired,
  }),
  setSelected: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
}

Comic.defaultProps = {
  item: null,
  isSelected: false,
}

export default Comic
