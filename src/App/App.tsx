import * as React from 'react'
import { Routes, Route } from 'react-router-dom'

import { MainPage } from '../pages/MainPage'
import { CatalogPage } from '../pages/CatalogPage/CatalogPage'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'

export const App = ({ title }) => {
  React.useEffect(() => {
    document.title = title
  }, [title])

  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
      </Routes>
      <Footer />
    </React.Fragment>
  )
}
