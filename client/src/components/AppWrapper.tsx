import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import App from '../App.tsx'

export const AppWrapper : React.FC = () => {
  return (
    <Router>
      <App />
    </Router>
  )
}