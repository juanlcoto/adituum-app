import React from 'react'
import { connect, styled } from 'frontity'

const Card = ({ img, title, description }) => {
  return (
        <>
            <StyleDiv>
                <img src={img} alt={title}/>
                <h2>{title}</h2>
                <p> {description} </p>
            </StyleDiv>
        </>
  )
}

export default connect(Card)

const StyleDiv = styled.div`
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
    padding: 1rem;

    &:hover {
        box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.2);
    }
`
