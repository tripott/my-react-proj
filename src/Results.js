import React from 'react'
import Pet from './Pet'
//import { propOr } from 'ramda'

const Results = ({ pets = [] }) => {
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>No Pets</h1>
      ) : (
        pets.map(pet => (
          <Pet
            id={pet.id}
            animal={pet.type}
            key={pet.id}
            name={pet.name}
            breed={pet.breeds.primary}
            media={pet.photos}
            location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
          />
        ))
      )}
    </div>
  )
}

export default Results
