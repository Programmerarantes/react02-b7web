"use client"

import { useState } from "react"

const Page = () => {

  const [nameInput, setNameInput] = useState('')

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <input 
        type="text" 
        className="border-black p-3 text-xl text-black rounded-md"
        placeholder="Digite seu nome"
        value={nameInput}
        onChange={e => setNameInput(e.target.value)}
      />
      <p>Seu nome é: {nameInput}</p>  
    </div>
  )
}

export default Page