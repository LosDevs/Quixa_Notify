import { useState } from 'react'
import ViewsRoutes from './routes/ViewsRoutes'
import './App.css'
import Home from './pages/Home'

function App() {

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
