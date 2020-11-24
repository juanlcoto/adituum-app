import React from 'react'
import { connect, styled } from 'frontity'

export const Link = ({ href, actions, children }) => {
  return (
    <>
      <StyleLink
          href={href}
          onClick = {e => {
            e.preventDefault()
            actions.router.set(href)
          }}
      >
          { children }
      </StyleLink>
    </>
  )
}

export default connect(Link)

const StyleLink = styled.a`
  color: #333;
  text-decoration:none;
`
