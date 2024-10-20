import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltersContextProvider } from './contexts/FiltersContext.jsx'
import { CartContextProvider } from './contexts/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersContextProvider>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </FiltersContextProvider>
)
