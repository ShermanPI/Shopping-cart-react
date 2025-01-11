import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltersContextProvider } from './contexts/FiltersContext.jsx'
import { CartContextProvider } from './contexts/CartContext.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { PageNotFound } from './components/PageNotFound/PageNotFound.jsx'
import { CheckoutPage } from './components/CheckoutPage/CheckoutPage.jsx'
import { MainLayout } from './components/MainLayout/MainLayout.jsx'
import { ShootingStarProvider } from './components/Header/contexts/ShootingStarContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersContextProvider>
    <CartContextProvider>
      <ShootingStarProvider>

        <BrowserRouter>
          <Routes>

            <Route path='/' element={<MainLayout />}>
              <Route index element={<App />} />
              <Route path='/checkout' element={<CheckoutPage />} />
            </Route>

            <Route path='*' element={<PageNotFound />} />

          </Routes>
        </BrowserRouter>

      </ShootingStarProvider>
    </CartContextProvider>
  </FiltersContextProvider>
)
