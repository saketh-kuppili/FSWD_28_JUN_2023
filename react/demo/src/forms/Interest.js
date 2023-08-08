import React from 'react'

export default function Interest() {

  function calculate(){
     var amount = parseInt(document.getElementById("txtAmount").value)
     var rate = parseInt(document.getElementById("txtRate").value)
     var interest = amount * rate / 100 
     document.getElementById("result").innerHTML = interest 
  }

  return (
     <>
      <h2>Interest Calculation</h2>
      Amount <br/>
      <input type="number" id="txtAmount"  required />
      <p></p>
      Interest Rate <br/>
      <input type="number" id="txtRate" />
      <p></p>
      <button onClick={calculate}>Caculate</button>
      <p></p>
      <h3 id="result"></h3>
     </>
  )
}
