import React, { useEffect, useState } from 'react'

export default function FetchDemo() {
    const [now, setNow] = useState('')

    // function getDateTime() {
    //     fetch("http://worldtimeapi.org/api/timezone/Etc/UTC")
    //         .then(response => response.json())
    //         .then(data => setNow(data.datetime))
    // }

    useEffect(() => {
        async function getNow() {
            let response = await fetch("http://worldtimeapi.org/api/timezone/asia/kolkata");
            if (response.ok) {
                let data = await response.json()
                setNow(data.datetime)
            }
        }
        getNow();
    }, []);



    return (
        <>
            <h2>Fetch Demo</h2>
            <h1>{now}</h1>
        </>
    )
}
