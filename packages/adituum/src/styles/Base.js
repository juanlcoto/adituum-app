import React from 'react'
import { Global, css } from 'frontity'

const Base = () => {
  const primaryColor = '#333333'
  const secondaryColor = '#f1f1f1'
  return (
        <Global
        styles = {css`
                @font-face {
                    font-family: 'Montserrat', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                    src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&display=swap');
                };
                html {
                    font-family: 'Montserrat', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                    font-size: 16px;
                }
                
                body {
                    margin:0;
                }
                a {
                    color: ${primaryColor};

                    &:hover {
                        color: ${secondaryColor};
                        transition: all .35s ease;
                    }
                }
            
            `}
        />
  )
}

export default Base
