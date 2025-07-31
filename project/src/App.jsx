import { useState, useEffect } from 'react'
import Monetization from './components/monetization/Monetization'
import PizzaApp from './components/PizzaApp'

function App() {

  return (
    <Monetization>
      <PizzaApp />
    </Monetization>
  )
}

export default App