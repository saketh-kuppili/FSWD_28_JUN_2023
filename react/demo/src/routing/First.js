import React from 'react';
import {useNavigate } from "react-router-dom";

export default function First() {
  let navigate = useNavigate()

  function showAbout(){
      navigate("/about") // Programmatic navigation 
  }
  return (
    <>
      <h1>First Component</h1>
      <button onClick={showAbout}>About</button>
    </>
  )
}
