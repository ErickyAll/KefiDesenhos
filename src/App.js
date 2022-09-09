import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Header from './components/header/Header'
import Section from './components/Section/MoreViews'
import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  return (
    <div>
      {AOS.init()}
      <Header />
      <Banner />
      <Section />
      <Footer />
    </div>
  )
}

export default App
