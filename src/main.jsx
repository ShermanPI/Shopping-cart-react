import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltersContextProvider } from './contexts/FiltersContext.jsx'
import { CartContextProvider } from './contexts/CartContext.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { PageNotFound } from './components/PageNotFound/PageNotFound.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersContextProvider>
    <CartContextProvider>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<App />} />

          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  </FiltersContextProvider>
)
