import React, { lazy } from 'react'
import { Router, Redirect } from '@reach/router'
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

const Footer = styled.footer`
  width: 100%;
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding: 24px;

  a {
    font-size: 14px;
    color: grey;
    text-decoration: none;
  }
`

const Routes = () => (
  <Section>
    <Marvel />
    <Main> 
      <Redirect from="/" to="/marvel-app" />

      <Router basepath="/marvel-app">
        <Route path="/" component={lazy(() => import('../containers/Comics'))} />
        <Route
          path="/quadrinho/:id"
          component={lazy(() => import('../containers/ComicsDetails'))}
        />
      </Router>
    </Main>
    <Footer>
      <a href="http://marvel.com">Data provided by Marvel. © 2021 MARVEL</a>
    </Footer>
  </Section>
)

export default Routes
