import React from 'react'

// const Pet = ({ name, animal, breed }) => {
//   return React.createElement('div', {}, [
//     React.createElement('h1', {}, name),
//     React.createElement('h2', {}, animal),
//     React.createElement('h2', {}, breed)
//   ])
// }

const Pet = ({
  name,
  animal = 'None provided',
  breed = 'None provided',
  media,
  location,
  id,
  key
}) => {
  const hero = media.length ? media[0].small : 'http://placecorgi.com/300/300'

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name}></img>
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </a>
  )
}

export default Pet
