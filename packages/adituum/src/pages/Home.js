import React from 'react'
import { connect, styled } from 'frontity'

import Hero from '../assets/adituum-header-heroe.jpg'
import Button from '../components/Button'
import Card from '../components/Card'
import Cta from '../components/Cta'

import imgServicioPostventa from '../assets/servicio-postventa.jpg'
import imgGestorDocumental from '../assets/gestor-documental.jpg'
import imgPersonalizaciones from '../assets/personalizaciones.jpg'
import imgCta from '../assets/adituum-cta-home.jpg'
import imgFacturacion from '../assets/facturacion.jpg'
import imgSoporte from '../assets/soporte-online.jpg'
import imgCrm from '../assets/crm.jpg'
import Footer from '../components/Footer'
import Link from '../components/Link'

const Home = () => {
  return (
        <>
            <HeroeContainer>
                <h1>Intranet exclusiva para promotores inmobiliarios</h1>
                <h2>Control de personalizaciones, listados de desperfectos,
                    facturación, soporte online...</h2>
                <Link href='/contacto'><Button>Solicitar información</Button></Link>
            </HeroeContainer>
            <FeaturedOneContainer>
                <Card
                    img={imgServicioPostventa}
                    title='Servicio postventa'
                    description='Listado de desperfectos. Fácil de cubrir por el cliente. La promotora lo recibe mediante correo electrónico'
                />
                <Card
                    img={imgPersonalizaciones}
                    title='Personalizaciones'
                    description='Ahora ofrecer este servicio al cliente, ya no será un problema. Fácil, intuitivo y fehaciente. Sin malentendidos'
                />
                <Card
                    img={imgGestorDocumental}
                    title='Gestor documental'
                    description='Planos, dossier, contratos, material multimedia...todo a mano de promotora y cliente. Digitalizado y organizado'
                />
            </FeaturedOneContainer>
            <CenterCta >
                <Cta
                    title='Todas las comunicaciones a un clic.
                    Ahorra tiempo y dinero'
                />
            </CenterCta>
            <FeaturedOneContainerBottom>
                <Card
                    img={imgFacturacion}
                    title='Facturación'
                    description='Genera las facturas de las distintas entregas a cuenta. Envía la factura por email. Pago digital inmediato'
                />
                <Card
                    img={imgSoporte}
                    title='Soporte online'
                    description='Limita el número de llamadas recibidas en la promotora. Toda la comunicación centralizada en la intranet'
                />
                <Card
                    img={imgCrm}
                    title='CRM'
                    description='Todos los datos de los clientes de la promoción. Sin utilizar de forma inncesaria más herramientas. Integrado con facturación'
                />
            </FeaturedOneContainerBottom>
            <Footer />
        </>
  )
}

export default connect(Home)

const HeroeContainer = styled.div`
    background-image: url(${Hero});
    margin: 0 auto;
    padding: 5%;

    @media screen and  (max-width: 600px) {
        background-repeat: no-repeat;
        background-size:cover;
        width: 90%;
    }

    h1 {
        color: #fff;
    }

    h2 {
        color: #fff;
    }
`
const FeaturedOneContainer = styled.div`
    display:grid;
    column-gap: 2rem;
    row-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(15.625rem, 1fr));
    margin: 0 auto;
    margin-top: 2rem;
    width:80%;

    img {
        max-height:auto;
        width: 100%;
    }

    p {
        max-height: auto;
        max-width: 100%;
    }
`
const CenterCta = styled.div`
    align-items:center;
    display:flex;
    background-image: url(${imgCta});
    height: 400px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin:0 auto;
    margin-top: 2rem;
    width: 100%;

    @media screen and (max-width: 600px) {
        width: 90%;
    }

    h2 {
        margin-top: 0;
    }
`
const FeaturedOneContainerBottom = styled.div`
    display:grid;
    column-gap: 2rem;
    row-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(15.625rem, 1fr));
    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
    width:80%;

    img {
        max-height: auto;
        width: 100%;
    }

    p {
        max-height: auto;
        max-width: 100%;
    }
`
