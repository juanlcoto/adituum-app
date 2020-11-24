import React from 'react'
import { connect, styled } from 'frontity'
import Button from '../components/Button'
import Link from '../components/Link'

const Cta = ({ title }) => {
  return (
        <>
            <CtaContainer>
                <h2> {title} </h2>
                <Link href='/contacto'><Button>Solicitar información</Button></Link>
            </CtaContainer>

        </>
  )
}

export default connect(Cta)

const CtaContainer = styled.div`
    align-items:center;
    display:flex;
    flex-direction:column;
    margin: 0 auto;
    padding: 2rem;
    text-align:center;
    width: 90%;

    h2 {
        color: #fff;
        font-size: 4rem;

        @media screen and (max-width: 600px) {
            font-size: 2.2rem;
        }

        @media screen and (max-width: 400px) {
            font-size: 2rem;
        }
    }
`
