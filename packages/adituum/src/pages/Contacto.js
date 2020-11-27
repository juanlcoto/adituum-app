import React from "react"
import { connect, styled } from "frontity"

const Contacto = ({ state, libraries }) => {
  const data = state.source.get("/contact-form")
  const contactForm = state.source.page[data.id]
  const Html2React = libraries.html2react.Component

  return (
      <>
        <ContactForm>
            <h1>Dinos cómo podemos ayudarte</h1>
            <Html2React html={contactForm.content.rendered} />
        </ContactForm>
      </>
  )
}

export default connect(Contacto)

const buttonColor = '#7E408C'

const ContactForm = styled.div`
  margin: 0 auto;
  width: 90%;

  @media screen and (min-width: 768px) {
    width:50%;
  }

  input[type="text"], 
  input[type="email"],
  textarea {
    background-color: #f1f1f1;
    border:none;
    font-family: Montserrat;
    font-size:1.2rem;
    font-weight:normal;
    margin: 0 auto;
    padding: 1rem .5rem;
    width:96%;
  }

  textarea {
    font-family: Montserrat;
    resize:none;
  }

  input[type="submit"] {
    align-items: center;
    background: ${buttonColor};
    border: 0;
    border-radius: 9999px;
    color: #fff;
    cursor: pointer;
    display: flex;
    font-weight: 800;
    font-size: 1rem;
    padding: 1rem 1.5rem;
    transition: opacity 0.3s ease;
    user-select: none;

    &[disabled] {
        pointer-events: none;
        opacity: 0.2;
    }

    &:hover {
        opacity: 0.7;
    }
  }

`
