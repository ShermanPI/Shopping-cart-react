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
import { ProductView } from './components/ProductView/ProductView.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersContextProvider>
    <CartContextProvider>
      <ShootingStarProvider>

        <BrowserRouter>
          <Routes>

            <Route path='/' element={<MainLayout />}>
              <Route index element={<App />} />
              <Route path='/checkout' element={<CheckoutPage />} />
              <Route path='/product/:id' element={<ProductView />} />
            </Route>

            <Route path='*' element={<PageNotFound />} />

          </Routes>
        </BrowserRouter>

      </ShootingStarProvider>
    </CartContextProvider>
  </FiltersContextProvider>
)

// The order in which React Router resolves routes:

// 1 - Exact match of static routes (e.g., /about/team).
// 2 - Routes with more static segments (e.g., /about/team takes priority over /about).
// 3 - Dynamic routes with specific parameters (e.g., /about/:id).
// 4 - More general dynamic routes (e.g., /user/:param1/:param2 has lower priority than a more specific route like /about/:id).
// 5 - star routes (*) (user/*), used as a last resort to capture any non-matching route.
