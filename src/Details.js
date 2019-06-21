import React, { useState, useEffect } from 'react'
import pet from '@frontendmasters/pet'

const Details = ({ id }) => {
  // ya know...
  // the most recent pet info for pet
  // can be found from the API

  const [selectedPet, setSelectedPet] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isSuccessful, setIsSuccessful] = useState({
    success: false,
    err: null
  })

  async function getPet(petId) {
    // const { animal } = await pet.animal(petId)
    pet
      .animal(petId)
      .then(animal => {
        setSelectedPet(animal)
        setIsLoading(false)
        setIsSuccessful({ success: true })
        // throw new Error('Oh no!')
      })
      .catch(err => {
        setSelectedPet({})
        setIsLoading(false)
        setIsSuccessful({ success: false, err })
      })
  }

  useEffect(() => {
    getPet(id)
  }, [])

  let DisplayTheStuff = null

  if (isLoading === false && isSuccessful.success === true) {
    DisplayTheStuff = (
      <div>
        <h1>Name: {selectedPet.animal.name}</h1>
        <h2>Breed: {selectedPet.animal.breeds.primary}</h2>
        <h2>Gender: {selectedPet.animal.gender}</h2>
        <p>{selectedPet.animal.description}</p>
        {/* <pre>
          <code>{JSON.stringify(selectedPet, null, 4)}</code>
        </pre> */}
      </div>
    )
  } else if (isLoading === true) {
    DisplayTheStuff = (
      <div>
        <h1>Loading...hang on...</h1>
      </div>
    )
  } else {
    DisplayTheStuff = <div>Whoops, couldnt get the pet.</div>
  }

  return DisplayTheStuff
}

export default Details
