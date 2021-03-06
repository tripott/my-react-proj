import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-fetch'

const Cats = ({ id }) => {
  const [cats, setCats] = useState([])
  const [renderStatus, setRenderStatus] = useState('loading')

  async function getCats() {
    fetch('http://localhost:5555/cats', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(cats => {
        setCats(cats)
        setRenderStatus('ok')
      })
      .catch(err => {
        setCats([])
        setRenderStatus('error')
      })
  }

  useEffect(() => {
    getCats()
  }, [])

  let DisplayTheStuff = null

  if (renderStatus === 'ok') {
    DisplayTheStuff = (
      <div>
        {cats.map(cat => (
          <h2 key={cat.id}>{cat.name}</h2>
        ))}
      </div>
    )
  } else if (renderStatus === 'loading') {
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
