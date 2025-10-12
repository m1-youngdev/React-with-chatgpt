import React from 'react'
import { useState } from 'react'
import NameInput from './NameInput'
import Greeting from './Greeting';

function Test() {
    const [name, setName] = useState("");

  return (
    <div className ="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Live Greeting App</h1>

        <NameInput setName= {setName}/>
        <Greeting name= {name}/>

    </div>
  )
}

export default Test
