import * as React from 'react'

const Details = (props) => {
  const { name, audio, g } = props

  return (
    <span id={name} className="Details">
      <h3 className="Details-header">
        <a href={'#' + name}>{name}</a>
        {g === undefined ? '' : g ? ' - G' : ' - H'}
      </h3>
      {props.children}
      {audio !== undefined ? (
        audio.map((e) => (
          <>
            <br />
            <audio controls style={{ width: '100%' }}>
              <source src={e} type="audio/wav" />
              Your browser does not support the audio element.
            </audio>
          </>
        ))
      ) : (
        <></>
      )}
    </span>
  )
}

export default Details
