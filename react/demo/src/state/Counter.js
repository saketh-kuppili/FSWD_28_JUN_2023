import React from 'react'

export default function Counter() {
  var counter = 1; 

  function inc() {
      counter ++;
      console.log(counter)
  }

  return (
     <>
      <h2>Counter : {counter}</h2>
      <button onClick={inc}>Increment</button>
     </>
  )
}

