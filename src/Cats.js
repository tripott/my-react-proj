import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-fetch'
import { Z_STREAM_ERROR } from 'zlib'

const Cats = ({ id }) => {
  const [cats, setCats] = useState([])
  const [viewStatus, setViewStatus] = useState('loading')

  async function getCats() {
    fetch('http://localhost:5555/cats', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(cats => cats.json())
      .then(cats => {
        console.log({ cats })
        setCats(cats)
        setViewStatus('ok')
      })
      .catch(err => {
        setCats([])
        setViewStatus('error')

        console.log({ err })
      })
  }

  useEffect(() => {
    getCats()
  }, [])

  let DisplayTheStuff = null

  if (viewStatus === 'ok') {
    DisplayTheStuff = (
      <div>
        {cats.map(cat => (
          <h2 key={cat.id}>{cat.name}</h2>
        ))}
      </div>
    )
  } else if (viewStatus === 'loading') {
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

export default Cats
