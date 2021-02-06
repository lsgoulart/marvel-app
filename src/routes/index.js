import React, { lazy } from 'react'
import { Router } from '@reach/router'
import styled from 'styled-components'

import { ReactComponent as Marvel } from '../assets/marvel-logo.svg'
import Route from '../components/Route'

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding-top: 28px;

  svg {
    width: 340px;
    height: 140px;
  }
`

const Main = styled.main`
  width: 100%;
`

const Routes = () => (
  <Section>
    <Marvel />
    <Main>
      <Router>
        <Route path="/" component={lazy(() => import('../containers/Comics'))} />
        <Route
          path="/quadrinho/:id"
          component={lazy(() => import('../containers/ComicsDetails'))}
        />
      </Router>
    </Main>
  </Section>
)

export default Routes
