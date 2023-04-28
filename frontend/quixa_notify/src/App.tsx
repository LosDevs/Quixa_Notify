import { useState } from 'react'
import {Links}  from 'react-router-dom'
import ViewsRoutes from './routes/ViewsRoutes'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {
        <div>
          {<ViewsRoutes/>}
        </div>
      }
    </div>
  )
}

export default App
