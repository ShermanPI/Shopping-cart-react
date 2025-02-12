import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { PageNotFound } from './components/PageNotFound/PageNotFound.jsx'
import { CheckoutPage } from './components/CheckoutPage/CheckoutPage.jsx'
import { MainLayout } from './components/MainLayout/MainLayout.jsx'
import { ProductView } from './components/ProductView/ProductView.jsx'
import { SearchedProducts } from './components/SearchedProducts/SearchedProducts.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>

      <Route path='/' element={<MainLayout />}>
        <Route index element={<App />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/product/:id' element={<ProductView />} />
        <Route path='/search' element={<SearchedProducts />} />
      </Route>

      <Route path='*' element={<PageNotFound />} />

    </Routes>
  </BrowserRouter>
)

// The order in which React Router resolves routes:

// 1 - Exact match of static routes (e.g., /about/team).
// 2 - Routes with more static segments (e.g., /about/team takes priority over /about).
// 3 - Dynamic routes with specific parameters (e.g., /about/:id).
// 4 - More general dynamic routes (e.g., /user/:param1/:param2 has lower priority than a more specific route like /about/:id).
// 5 - star routes (*) (user/*), used as a last resort to capture any non-matching route.
