import React, { useState, useEffect } from 'react'
import pet from '@frontendmasters/pet'

const Details = ({ id }) => {
  // ya know...
  // the most recent pet info for pet
  // can be found from the API

  const [selectedPet, setSelectedPet] = useState({})

  async function getPet(petId) {
    const { animal } = await pet.animal(petId)
    setSelectedPet(animal)
    console.log({ animal })
  }

  useEffect(() => {
    getPet(id)
  }, [])

  return (
    <div>
      <h1>Details</h1>

      {/* <h1>{animal}</h1>
      <h2>{breed}</h2>
      <h2>{location}</h2> */}
    </div>
  )
}

export default Details
