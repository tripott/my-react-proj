import React from 'react'
import { render } from 'react-dom'
import Pet from './Pet'
import SearchParams from './SearchParams'
import { Router, Link } from '@reach/router'
import Details from './Details'
import Cats from './Cats'

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
        <Cats path="/cats" />
      </Router>
    </div>
  )
}

render(React.createElement(App), document.getElementById('root'))
