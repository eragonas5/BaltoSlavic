import * as React from 'react'

const Details = (props) => {
  const { name, audio } = props

  return (
    <span id={name} className="Details">
      <h3 className="Details-header">
        <a href={'#' + name}>{name}</a>
      </h3>
      {props.children}
      <br />
      <audio controls style={{ width: '100%' }}>
        <source src={audio} type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
    </span>
  )
}

export default Details
