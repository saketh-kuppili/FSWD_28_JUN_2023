import React, {useState} from 'react'


export default function StateCounter() {
  let [counter, setCounter]  = useState(100) 

  function inc() {
      setCounter(counter + 1)
  }
  function dec() {
    setCounter(counter - 1)
}

  return (
     <>
      <h2>Counter : {counter}</h2>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
     </>
  )
}

