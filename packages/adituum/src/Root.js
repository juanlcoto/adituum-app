import React, { useEffect } from 'react'
import { connect, styled } from 'frontity'
import Header from './components/Header'
import Tarifas from './pages/Tarifas'
import Caracteristicas from './pages/Caracteristicas'
import Base from '../src/styles/Base'
import Home from './pages/Home'
import Contacto from './pages/Contacto'
import Privacidad from './pages/Privacidad'

const Root = ({ state, actions }) => {
  const url = state.router.link
  const data = state.source.get(url)
  useEffect(() => {
    actions.source.fetch('/caracteristicas/')
    actions.source.fetch('/tarifas/')
    actions.source.fetch('/contacto/')
  }, [])

  return (
    <>
        <Base />
        <Header />
        <StyleMain>
          { data.isFetching && 'Loading...' }
          { data.isHome && <Home /> }
          { url === '/tarifas/' && <Tarifas /> }
          { url === '/caracteristicas/' && <Caracteristicas /> }
          { url === '/contacto/' && <Contacto />}
          { url === '/politica-de-privacidad/' && <Privacidad />}
        </StyleMain>

    </>
  )
}

export default connect(Root)

const StyleMain = styled.main`
  margin:0 auto;
`
