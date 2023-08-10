import React, { useState } from 'react'

function AddQuote({ addQuote }) {

    function addNewQuote() {
        let value = document.getElementById("txtQuote").value
        addQuote(value)  // call parent's function
    }

    return (
        <>
            Quote : <input type="text" id="txtQuote" />
            <br />
            <button onClick={addNewQuote}>Add</button>
        </>
    )
}

function ListQuotes({ quotes, deleteQuote }) {

    function deleteOneQuote(idx) {
        console.log('Deleting ' + idx)
        deleteQuote(idx)
    }

    return (
        <>
            <ul>
                {
                    quotes.map((q, idx) =>
                        <li key={idx}>
                            {q}  <button onClick={() => deleteOneQuote(idx)}>Delete</button>
                        </li>)
                }
            </ul>
        </>
    )
}

export default function Quotes() {
    let [quotes, setQuotes] = useState(
        ["Life begins after college ends!", "Winners never quit! Quitters never win!"]
    )

    function addQuote(quote) {
        setQuotes([...quotes, quote])
    }

    function deleteQuote(idxToDelete) {
        setQuotes(quotes.filter((v, idx) => idx !== idxToDelete))
    }

    return (
        <>
            <h1>Qoutes</h1>
            <AddQuote addQuote={addQuote} />
            <p></p>
            <hr />
            <ListQuotes quotes={quotes} deleteQuote = {deleteQuote} />
        </>
    )
}
