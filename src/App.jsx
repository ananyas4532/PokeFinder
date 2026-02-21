import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./Pages/Home";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <h1 className="title">PokéFinder</h1>
<p className="subtitle">Discover and explore your favorite Pokémon</p>
        <Home/>
      </div>
    </>
  )
}

export default App
