import React, {useState} from 'react'

export default function InterestForm() {
   let [ data, setData] = useState( {amount : 0, rate : 0, result :0})
   
   function changeValue(event){
      setData( {...data, [event.target.name] : event.target.value})
   }

   function calculate(e) {
      e.preventDefault()  // DO NOT refresh page 
      let interest  = data.amount * data.rate / 100
      setData({ ...data, result : interest})
   }

   return (
      <>
         <h2>Interest Calculation</h2>
         <form onSubmit={calculate}>
            Amount <br />
            <input type="number" onChange={changeValue} name="amount"
                  required value={data.amount}  min="1000" />
            <p></p>
            Interest Rate <br />
            <input type="number" onChange={changeValue} name="rate"
                   required  value={data.rate}  min="1"  />
            <p></p>
            <button>Caculate</button>
            <p></p>
            {data.result > 0 ? <h3>Interest : {data.result}</h3> : null }
         </form>
      </>
   )
}
