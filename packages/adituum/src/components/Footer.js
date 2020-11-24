import React from 'react'
import { styled } from 'frontity'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
        <>
            <FooterContainer>
                <p>&#169; {year} Adituum. Intranets para promotoras inmobiliarias</p>
            </FooterContainer>
        </>
  )
}

export default Footer

const FooterContainer = styled.div`
    text-align: center;
`
