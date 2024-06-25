import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppWrapper } from './components/AppWrapper.tsx'
import './styles/App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppWrapper/>
  </React.StrictMode>,
)
