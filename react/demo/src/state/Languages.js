import React, {useState} from 'react'

export default function Languages() {
    let [langs, setLangs] = useState([])
    let [message, setMessage] = useState("")

    function addLang() {
        let lang = document.getElementById("txtLang").value
        // check whether lang is already present in langs
        if(langs.includes(lang))
            setMessage("Name already exists")
        else {
            setLangs( [...langs, lang])
            setMessage("")
        }
    }

    function clearLangs() {
        setLangs([])
    }

    function deleteLang() {
        let lang = document.getElementById("txtLang").value
        setLangs(langs.filter( l => l !== lang))
    }

    return (
        <>
            <h2>Languages</h2>
            Language : <input type="text" id="txtLang" />
            <span>{message}</span>
            <p></p>
            <button onClick={addLang}>Add</button>
            <button onClick={deleteLang}>Delete</button>
            <button onClick={clearLangs}>Clear</button>
            <ul>
                {
                    langs.map(lang => <li>{lang}</li>)
                }
            </ul>
        </>



    )
}
