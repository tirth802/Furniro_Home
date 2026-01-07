import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import BrowseRange from './components/BrowseRange'
import ProductList from './components/ProductList'
import Inspiration from './components/Inspiration'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
        <Header/>
        <main>
           <HeroSection/> 
           <BrowseRange/>
           <ProductList/>
           <Inspiration/>
        </main>
        <Footer/>
    </div>
  )
}

export default App