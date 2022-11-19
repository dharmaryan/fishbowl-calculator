import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link';

function Home() {
    const testfunction = () => {
        const valueButton = document.getElementById("poop").value
        alert(valueButton)
    }
    const [number, setNumber] = useState(0);
  return (
    <>
    <div class="head">
        This is a bar.
        <HashLink to="/calculator" smooth>Move to calculator</HashLink>

    </div>
    <div>
        
    </div>

    <style jsx> {`
        .head {
            color: black;
            background: white;
            opacity: 1;
            font-size: 100px;
            margin-top: 5%;
            padding: 0.5%;
        }
    `}</style>
    </>
  )
}

export default Home