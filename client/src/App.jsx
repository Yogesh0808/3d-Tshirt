import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Canvas from './canvas'
import Home from './pages/Home'
import Customizer from './pages/Customizer'

function App() {

  return (
    <main className="app transition-all ease-in">
    <Home />
    <Canvas />
    <Customizer />
    </main>
  )
}

export default App
