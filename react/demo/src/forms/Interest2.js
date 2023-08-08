import React from 'react'

export default function Interest2() {

   function calculate(e) {
      //console.log(e)  
      e.preventDefault()  // DO NOT refresh page 
      var amount = parseInt(document.getElementById("txtAmount").value)
      var rate = parseInt(document.getElementById("txtRate").value)
      var interest = amount * rate / 100
      document.getElementById("result").innerHTML = interest
   }

   return (
      <>
         <h2>Interest Calculation</h2>
         <form onSubmit={calculate}>
            Amount <br />
            <input type="number" id="txtAmount" required />
            <p></p>
            Interest Rate <br />
            <input type="number" id="txtRate" required />
            <p></p>
            <button>Caculate</button>
            <p></p>
            <h3 id="result"></h3>
         </form>
      </>
   )
}
