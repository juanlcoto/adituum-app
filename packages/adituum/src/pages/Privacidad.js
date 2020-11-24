import React from "react"
import { connect } from "frontity"

const Privacidad = ({ state }) => {
  const data = state.source.page[1178]

  return (
      <>
        <h1>{data.title.rendered}</h1>
        <p dangerouslySetInnerHTML={{ __html: data.content.rendered }}/>
      </>
  )
}

export default connect(Privacidad)
