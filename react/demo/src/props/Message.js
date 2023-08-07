import React from 'react'

export default function Message(props) {
  return (
      <h1 style={{'color': props.color ?? 'green', 
                  'letterSpacing' : '5pt', 
                  'fontFamily' : 'consolas'}}>{props.msg}</h1>
  )
}
