"use client"

import { Person } from "@/types/Person"
import { useState } from "react"

const Page = () => {
  const [fullName, setFullName] = useState<Person>({ name: 'Matheus', lastName: 'Arantes' })

  const handleClearBtn = () => {
    setFullName({name: '', lastName: ''})
  }
  const handleClearName = () => {
    setFullName({...fullName, name: ''})
  }
  const handleClearLastName = () => {
    setFullName({...fullName, lastName: ''})
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <h1 className="mb-4">Updating Objects in States - React</h1>
      <input 
        type="text" 
        placeholder="Nome"
        className="border border-black p-3 text-2xl text-black rounded-md mb-3"
        value={fullName.name}
        onChange={e => setFullName({...fullName, name: e.target.value})}
      />
      <input 
        type="text" 
        placeholder="Sobrenome"
        className="border border-black p-3 text-2xl text-black rounded-md mb-3"
        value={fullName.lastName}
        onChange={e => setFullName({...fullName, lastName: e.target.value})}
      />
      <p>Meu nome completo é: </p>
      <p>{fullName.name} {fullName.lastName}</p>

      <button onClick={handleClearBtn} className="border bg-white text-black rounded-md p-3 m-2 text-xl">Limpar Tudo</button>
      <button onClick={handleClearName} className="border bg-white text-black rounded-md p-3 m-2 text-xl">Limpar Nome</button>
      <button onClick={handleClearLastName} className="border bg-white text-black rounded-md p-3 m-2 text-xl">Limpar Sobrenome</button>
    </div>
  )
}

export default Page