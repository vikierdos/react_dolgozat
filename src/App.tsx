import { useState } from 'react'
import { TANULOSZOBAK } from './adatok'
import './App.css'

function App() {
  
  const [TanuloSzobak, setTanuloSzobak] = useState();

  return (
    <div>
      <div className="fej">
        <h1>Tanulószobák neked!</h1>
        <p>Találd meg a számodra megfelelő tanulószobát</p>
      </div>

      <footer>Erdős Viktória</footer>
    </div>
  )
}

export default App
