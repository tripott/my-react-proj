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
        <h1>Details</h1>
      </div>
    )
  } else if (isLoading === true) {
    DisplayTheStuff = (
      <div>
        <h1>Loading... hang on...</h1>
      </div>
    )
  }

  return DisplayTheStuff
}

export default Details
