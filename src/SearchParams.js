import React, { useState, useEffect } from 'react'
import pet, { ANIMALS } from '@frontendmasters/pet'
import useDropdown from './useDropdown'

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA')
  //const [animal, setAnimal] = useState('All')
  //const [breed, setBreed] = useState('')
  const [breeds, setBreeds] = useState([])

  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS)
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds)
  const [team, SECDropdown, setSECTeam] = useDropdown('SEC Teams', 'UGA', [
    'UGA',
    'Auburn',
    'BAMA'
  ])

  useEffect(() => {
    setBreeds([])
    setBreed('')

    pet.breeds(animal).then(result => {
      const catNames = result.breeds.map(catObj => catObj.name)
      setBreeds(catNames)
    })
  }, [animal])

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          ></input>
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <SECDropdown />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchParams
