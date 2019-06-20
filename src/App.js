import React from 'react'
import { render } from 'react-dom'
import Pet from './Pet'

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, { name: 'Trigger', animal: 'Dog', breed: 'Mutt' }),
    React.createElement(Pet, { name: 'Dash', animal: 'Dog', breed: 'Mutt' }),
    React.createElement(Pet, {
      name: 'Tootles',
      animal: 'Dog',
      breed: 'Minx'
    }),
    React.createElement(Pet, {
      name: 'Freddy',
      animal: 'Frog',
      breed: 'American Bullfrog'
    })
  ])
}

render(React.createElement(App), document.getElementById('root'))
