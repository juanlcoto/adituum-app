import React from 'react'
import { styled } from 'frontity'

const Button = ({ children, onClick, disabled }) => {
  return (
        <>
            <StyledButton
                disabled={disabled}
                onClick={ onClick }
            >
                {children}
            </StyledButton>
        </>

  )
}

export default Button

const buttonColor = '#7E408C'

const StyledButton = styled.button`
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
    `
