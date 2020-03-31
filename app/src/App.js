import React, { useState } from 'react'
import './App.css'
import Pets from './components/pets/pets'
import Pet from './components/pet/pet'

function App() {
  const [selectedPet, setSelectedPet] = useState(window.location.hash.substr(1) || 0)

  return (
    <div className="pets-app">
      <Pets setSelectedPet={setSelectedPet} />
      <Pet selectedPet={selectedPet} />
    </div>
  )
}

export default App
