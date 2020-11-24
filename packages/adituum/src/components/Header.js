import React from 'react'
import { connect, styled } from 'frontity'
import Link from './Link'
import Logo from '../assets/logo-adituum.svg'

const Header = () => {
  return (
    <>
    <StyleHeader>
      <StyledLogoContainer>
        <Link href='/'><img src={Logo} alt='Adituum logo'/></Link>
      </StyledLogoContainer>
        <StyledNav>
          <Link href='/caracteristicas'>Características</Link>
          <Link href='/tarifas/'>Tarifas</Link>
          <Link href='/contacto'>Contacto</Link>
        </StyledNav>
    </StyleHeader>
    </>
  )
}

export default connect(Header)

const StyleHeader = styled.header`
  align-items:center;
  backdrop-filter: blur(5px);
  display:flex;
  justify-content: space-around;
  margin:0 auto;
  padding: .5rem 0;
  position:sticky;
  top:0;
  width:100%;

  @media screen and (max-width: 500px) {
    flex-direction:column;
  }
`
const StyledLogoContainer = styled.div`
  img {
    height: 2.5rem;
    transition: all .35s ease;
    width: auto;

    &:hover{
      transform: scale(1.02);
    }
  }
`
const StyledNav = styled.nav`
  a{
    color: #000;
    padding:.5rem;
  }
`
