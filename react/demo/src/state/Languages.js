import React, {useState} from 'react'

export default function Languages() {
    let [langs, setLangs] = useState([])

    function addLang() {
        let lang = document.getElementById("txtLang").value
        setLangs( [...langs, lang])
    }

    return (
        <>
            <h2>Languages</h2>
            Language : <input type="text" id="txtLang" />
            <p></p>
            <button onClick={addLang}>Add</button>
            <button>Delete</button>
            <button>Clear</button>
            <ul>
                {
                    langs.map(lang => <li>{lang}</li>)
                }
            </ul>
        </>



    )
}
