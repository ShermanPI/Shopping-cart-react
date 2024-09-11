import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltersContextProvider } from './contexts/FiltersContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FiltersContextProvider>
      <App />
    </FiltersContextProvider>
  </React.StrictMode>
)
