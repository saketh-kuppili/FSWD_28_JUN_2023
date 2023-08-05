import React from 'react'

export default function DisplayTime() {
  let title = "Events Demo";
  
  function showDateTime() {
     alert( new Date().toString())
  }

  return (
     <>
       <h2>{title}</h2>
       <h4>Click on the button below to get date and time</h4>
       <button onClick={showDateTime}>Click Here</button>
     </>
  )
}
