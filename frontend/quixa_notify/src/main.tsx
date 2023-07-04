import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ProblemaProvider } from './context/ProblemaContext'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Router>
        <ProblemaProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ProblemaProvider>
      </Router>
  </React.StrictMode>,
)
