import { connect, styled } from 'frontity'
import React from 'react'
import Button from '../components/Button'
import Link from '../components/Link'

const Tarifas = ({ state }) => {
  const TitleTarifas = state.source.page[52]
  const DataTarifas = state.source.page[52].acf
  return (
    <>
      <StyleTitle>{TitleTarifas.title.rendered}</StyleTitle>
      <StyleMain>
        <StyleCard>
          <h2>{DataTarifas.titulo_plan_basic}</h2>
          <span dangerouslySetInnerHTML={{ __html: DataTarifas.caracteristicas_plan_basic }} />
          <h3>{DataTarifas.precio_plan_basic}</h3>
          <Link href='/contacto'><Button>{DataTarifas.boton_plan_basic}</Button></Link>
        </StyleCard>
        <StyleCard>
          <h2>{DataTarifas.titulo_plan_premium}</h2>
          <span dangerouslySetInnerHTML={{ __html: DataTarifas.caracteristicas_plan_premium }} />
          <h3>{DataTarifas.precio_plan_premium}</h3>
          <Link href='/contacto'><Button>{DataTarifas.boton_plan_basic}</Button></Link>
        </StyleCard>
        <StyleCard>
          <h2>{DataTarifas.titulo_plan_pro}</h2>
          <span dangerouslySetInnerHTML={{ __html: DataTarifas.caracteristicas_plan_pro }} />
          <h3>{DataTarifas.precio_plan_pro}</h3>
          <Link href='/contacto'><Button>{DataTarifas.boton_plan_basic}</Button></Link>
        </StyleCard>
      </StyleMain>
    </>
  )
}

export default connect(Tarifas)

const buttonColor = '#7E408C'

const StyleTitle = styled.h1`
  text-align:center;
`

const StyleMain = styled.div`
  margin: 0 auto;
  width: 90%;

  @media screen and (min-width: 500px) {
    display:flex;
    gap: 1rem;
    justify-content: space-around;
    margin: 0 auto;
    width:80%;
  }
`

const StyleCard = styled.div` 
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
  margin-bottom: 1rem;
  padding: 1rem;

  h3 {
    font-size: 1.5rem;
  }

  &:hover {
    box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.2);
  }

  &:nth-of-type(2) {
    h2 {
      background-color: ${buttonColor};
      color: #fff;
      text-align: center;
    }
  }

  @media screen and (min-width: 500px) {
    min-width: 25rem;

    ul {
      min-height: 6rem;
    }

    &:nth-of-type(odd) {
    margin-top:.9rem;
  }
  }
`
