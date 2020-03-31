import React, { useState } from 'react'
import './App.css'
import Pets from './components/pets/pets'
import Pet from './components/pet/pet'

function App() {
  const [selectedPet, setSelectedPet] = useState(1)

  return (
    <div className="pets-app">
      <Pets setSelectedPet={setSelectedPet} />
      <Pet selectedPet={selectedPet} />
    </div>
  )
}

export default App
