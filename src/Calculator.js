import React, { useState } from 'react'

function Calculator() {
    const testfunction = () => {
        const valueButton = document.getElementById("poop").value
        alert(valueButton)
    }
    const [number, setNumber] = useState(0);
  return (
    <>
    <div class="head">
        This is a bar. This is also the next page.
        <button onClick={testfunction}>Move to next sheet</button>
    </div>
    <div>
        This is writing. Test test test test 
    </div>

    <style jsx> {`
        .head {
            color: black;
            background: white;
            opacity: 0.5;
            margin-top: 0%;
            padding: 0.5%;
        }
    `}</style>
    </>
  )
}

export default Home