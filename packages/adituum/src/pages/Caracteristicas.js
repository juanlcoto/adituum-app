import { connect, styled } from 'frontity'
import React from 'react'
import Footer from '../components/Footer'

const Caracteristicas = ({ state }) => {
  const data = state.source.page[48].acf
  const title = state.source.page[48].title.rendered

  return (
    <>
      <TitleStyled>{title}</TitleStyled>
      <StyleMain>
        <StyleCard>
          <h3>{data.titulo_caracteristicas_1}</h3>
          <p>{data.descripcion_caracteristicas_1}</p>
        </StyleCard>
        <StyleCard>
          <h3>{data.titulo_caracteristicas_2}</h3>
          <p>{data.descripcion_caracteristicas_3}</p>
        </StyleCard>
        <StyleCard>
          <h3>{data.titulo_caracteristicas_3}</h3>
          <p>{data.descripcion_caracteristicas_3}</p>
        </StyleCard>
        <StyleCard>
          <h3>{data.titulo_caracteristicas_4}</h3>
          <p>{data.descripcion_caracteristicas_4}</p>
        </StyleCard>
        <StyleCard>
          <h3>{data.titulo_caracteristicas_5}</h3>
          <p>{data.descripcion_caracteristicas_5}</p>
        </StyleCard>
        <StyleCard>
          <h3>{data.titulo_caracteristicas_6}</h3>
          <p>{data.descripcion_caracteristicas_6}</p>
        </StyleCard>
        <StyleCard>
          <h3>{data.titulo_caracteristicas_7}</h3>
          <p>{data.descripcion_caracteristicas_7}</p>
        </StyleCard>
        <StyleCard>
          <h3>{data.titulo_caracteristicas_8}</h3>
          <p>{data.descripcion_caracteristicas_8}</p>
        </StyleCard>
        <StyleCard>
          <h3>{data.titulo_caracteristicas_9}</h3>
          <p>{data.descripcion_caracteristicas_9}</p>
        </StyleCard>
        <StyleCard>
          <h3>{data.titulo_caracteristicas_10}</h3>
          <p>{data.descripcion_caracteristicas_10}</p>
        </StyleCard>
        <StyleCard>
          <h3>{data.titulo_caracteristicas_11}</h3>
          <p>{data.descripcion_caracteristicas_11}</p>
        </StyleCard>
        <StyleCard>
          <h3>{data.titulo_caracteristicas_12}</h3>
          <p>{data.descripcion_caracteristicas_12}</p>
        </StyleCard>
        <StyleCard>
          <h3>{data.titulo_caracteristicas_13}</h3>
          <p>{data.descripcion_caracteristicas_13}</p>
        </StyleCard>
        <StyleCard>
          <h3>{data.titulo_caracteristicas_14}</h3>
          <p>{data.descripcion_caracteristicas_14}</p>
        </StyleCard>
        <StyleCard>
          <h3>{data.titulo_caracteristicas_15}</h3>
          <p>{data.descripcion_caracteristicas_15}</p>
        </StyleCard>
      </StyleMain>
    </>
  )
}

export default connect(Caracteristicas)

const StyleMain = styled.main`
  column-gap: 2rem;
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  margin: 0 auto;
  row-gap: 2rem;
  width:90%;

  h1{
    text-align: center;
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    width: 80%;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    width: 80%;
  }
`

const TitleStyled = styled.h1`
  margin:0 auto;
  margin-bottom: 1rem;
  text-align:center;
  width: 80%;
`

const StyleCard = styled.div`
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
  padding: 1rem;

  &:hover {
      box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.2);
  }
  padding: 0 1rem;
`
